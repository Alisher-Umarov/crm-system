import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Groups from './pages/Groups/Groups'
import Home from './pages/Home/Home'
import Bugalteriya from './pages/Bugalteriya/Bugalteriya'
import Sozlamalar from './pages/Sozlamalar/Sozlamalar'
import Learners from './pages/Learners/Learners'
import Yordam from './pages/Yordam/Yordam'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/guruhlar'} element={<Groups />} />
          <Route path={'/oquvchilar'} element={<Learners/>} />
          <Route path={'/bugalteriya'} element={<Bugalteriya/>} />
          <Route path={'/sozlamalar'} element={<Sozlamalar/>} />
          <Route path={'/yordam'} element={<Yordam/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
