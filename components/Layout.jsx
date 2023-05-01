import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Navbar />

      <main className='container mx-auto'>
        {children}
      </main>

      <footer className='bg-black text-white font-bold mt-11 text-center py-7'>
        <p className='uppercase'>TMDB &copy; Todos los Derechos Reservados, 2023</p>
      </footer>
    </>

  )
}

export default Layout