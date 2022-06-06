import React from 'react'
import Header from '~/conponents/Layout/components/Header';

function HeaderLayout({ children }) {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="content">
                {children}
            </div>
        </div>
    </div>
  )
}

export default HeaderLayout