import React from 'react';
import { addNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';

const AddPage = () => {
    const navigate = useNavigate();
    const onAddNotesHandler = ({title, body}) => {
        addNote({title, body});

        navigate('/')
    }
    return (
        <section>
            <h2>Tambahkan Catatan</h2>
            <NoteInput addNote={onAddNotesHandler} />
        </section>
    )
}

export default AddPage;
