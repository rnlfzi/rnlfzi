import React from 'react';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import DetailPage from './pages/DetailPage';
import ArchievePage from './pages/ArchievePage';
import NotFoundPage from './pages/NotFoundPage';
import EditPage from './pages/EditPage';

const App = () => {
  return (
    <div className='app-container'>
      <header className="note-app__header">
        <h1>Aplikasi Catatan</h1>
        <Navigation/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <HomePage/> } />
          <Route path='/add' element={ <AddPage/> } />
          <Route path='/notes/:id' element={ <DetailPage/> } />
          <Route path='/note/edit/:id' element={ <EditPage/> } />
          <Route path='/archive' element={ <ArchievePage/> } />
          <Route path='*' element={ <NotFoundPage/> } />
        </Routes>
      </main>
    </div>
  )
}

export default App;

