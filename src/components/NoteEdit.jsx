import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import { editNote } from '../utils/local-data';

const NoteEditWrapper = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const onEditNotesHandler = ({id, title, body}) => {
        editNote({id, title, body});

        navigate(`/notes/${id}`)
    }

    return <NoteEdit id={id} editNote={onEditNotesHandler}/>
}


class NoteEdit extends React.Component {
    constructor(props) {
        super(props)

        const note = getNote(props.id)

        this.state = {
            id: note.id,
            title: note.title,
            body: note.body,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.editNote(this.state)
    }

    render() {
        return (
            <form className='add-new-page__input' onSubmit={ this.onSubmitEventHandler }>
                <input 
                    className="add-new-page__input__title" 
                    type="text" 
                    placeholder="Title" 
                    value={ this.state.title } 
                    onChange={this.onTitleChangeEventHandler} 
                    
                />
                <textarea 
                    className="add-new-page__input__body" 
                    type="text" 
                    placeholder="Body" 
                    value={ this.state.body } 
                    onChange={this.onBodyChangeEventHandler} 
                />
                <button className="btn__submit" type="submit">Submit</button>
            </form>
        )
    }
}

NoteEdit.propTypes = {
    editNote: PropTypes.func.isRequired
}

export default NoteEditWrapper;