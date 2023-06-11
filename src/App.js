import React from 'react'

//API WORK
import { AppContext } from './context/contextApi';

// components needed 
import Header from './components/Header';
import Feed from './components/Feed';
import LeftNav from './components/LeftNav';
import LeftNavMenuItems from './components/LeftNavMenuItems';
import SearchResults from './components/SearchResult';
import SearchResultVideoCard from './components/SearchResultVideoCard';
import VideoCard from './components/VideoCard';
import VideoDetails from './components/VideoDetails';
import Loader from './shared/Loader';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <AppContext>
            <BrowserRouter >
                <div className='flex flex-col h-full no-scroll'>
                    <Header />
                    <Routes>
                        <Route path='/' exact element={<Feed />} />
                        <Route path='searchResult/:searchQuery' element={<SearchResults />} />
                        <Route path='/video/:id' element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    )
}

export default App