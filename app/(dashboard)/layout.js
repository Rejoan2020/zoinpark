import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function layout({children}) {
  return (
    <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 bg-background">
              {children}
            </main>
            <Footer />
          </div>
        </div>
  )
}
