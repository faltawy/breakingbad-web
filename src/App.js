import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound';
import '@fontsource/roboto';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';
import { Helmet } from 'react-helmet';
import WalterWhite from './assets/icons/walterWhite.svg';
import Quotes from './pages/Quotes';


function App() {
  return (
    <React.Fragment>
      <Helmet>
        <link rel='icon' href={WalterWhite} />
        <title>Breaking Bad</title>
      </Helmet>
      <Routes>
        <Route path='' exact element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/quotes' element={<Quotes />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  )
}

export default App