import React from 'react'
import NoteEdit from '../components/NoteEdit'

const EditPage = () => {
    return (
        <section>
            <h2>Edit Catatan</h2>
            <p>Silakan input bagian yang anda ingin rubah.</p>
            <NoteEdit />
        </section>
    )
}

export default EditPage
