import React from 'react'
import Dashboard from '../../components/Dashboard/Dashboard'
import Header from '../../components/Header/Header'

const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        <Dashboard/>
        {children}
    </div>
  )
}

export default Layout