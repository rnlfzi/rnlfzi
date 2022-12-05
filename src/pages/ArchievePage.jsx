import React from 'react';
import PropTypes from 'prop-types';
import NotedList from '../components/NotedList';
import { getArchivedNotes } from '../utils/local-data';

class ArchievePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getArchivedNotes()
        }
    }

    render() {
        return (
            <section>
                <h2>Daftar Arsip Catatan</h2>
                {this.state.notes.length === 0 && (
                    <div className="notes-list-empty">
                        <p>Tidak ada Catatan terarsip!!!</p>
                    </div>
                )}
                <NotedList notes={this.state.notes} />
            </section>
        )
    }
}

NotedList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ArchievePage;