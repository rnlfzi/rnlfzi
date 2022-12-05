import React from 'react';
import PropTypes from 'prop-types';
import NotesDetail from  '../components/NotesDetail';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote, getAllNotes, archiveNote, unarchiveNote } from '../utils/local-data';

const DetailPageWrapper = () => {
    const {id} = useParams();
    return <DetailPage id={id}/>
};

class DetailPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: getNote(props.id)
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this)
        this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this)
    }

    onDeleteHandler(id) {
        deleteNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        })        
    }

    onArchiveHandler(id) {
        archiveNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        })
    }

    onUnarchiveHandler(id) {
        unarchiveNote(id);

        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        })
    }

    render() {
        return(
            <section>
                {this.state.notes === null && (
                    <div className="notes-list-empty">
                        <p>Tidak ada Catatan!!!</p>
                    </div>
                )}
                <NotesDetail 
                    {...this.state.note} 
                    onDelete={this.onDeleteHandler} 
                    onArchive={this.onArchiveHandler} 
                    onUnarchived={this.onUnarchiveHandler}
                />
            </section>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onArchive: PropTypes.func,
    onUnarchived: PropTypes.func,
}

export default DetailPageWrapper;
