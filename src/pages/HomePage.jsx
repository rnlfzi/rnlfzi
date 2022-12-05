import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NotedList from '../components/NotedList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');
    const changeSearchParams = (keyword) => {
        setSearchParams({keyword})
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams}/>
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword
            }
        })

        this.props.keywordChange(keyword)
    }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })

        return (
            <section>
                <h2>Daftar Catatan Aktif</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                {notes && notes.length === 0 && (
                    <div className="notes-list-empty">
                        <p>Catatan tidak ditemukan atau kosong!!!</p>
                    </div>
                )}
                <NotedList notes={notes}/>
            </section>
        )
    }
}

HomePage.propTypes = {
    keyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.object)
}

export default HomePageWrapper;
