import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound';
import '@fontsource/roboto';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Characters from './pages/Characters';

function App() {
  return (
    <Routes>
      <Route path='' exact element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App