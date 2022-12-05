import React from 'react';
import { Link } from 'react-router-dom';
import { MdNoteAdd } from 'react-icons/md';
import { HiHome } from 'react-icons/hi2';
import { HiInboxIn } from 'react-icons/hi';

const Navigation = () => {
    return (
        <div>
            <nav className='navigation'>
                <ul>
                    <li><Link to='/'><HiHome/></Link></li>
                    <li><Link to='/add'><MdNoteAdd/></Link></li>
                    <li><Link to='/archive'><HiInboxIn/></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;
