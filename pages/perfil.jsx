"use client"
import Layout from '@/components/Layout'
import { movieandseries } from '@/context/MovieContextProvider'
import Link from 'next/link';
import React from 'react'

const perfil = () => {

  const {user, logout} = movieandseries();

  const handleLogout = async () => {
    await logout();
  }

  console.log(user);

  return (
    <Layout>
      <div className='w-2/5 mx-auto text-center text-white min-h-screen mt-16'>
        <img className='mt-10 w-72 mx-auto mb-3 rounded-full' src="/img/avatar.jpg" alt="avatar" />
        <p className="text-2xl font-bold mb-3">Welcome!!! <span className="font-normal">{user.email}</span></p>
        <Link onClick={handleLogout} className='py-2 px-6 bg-white font-bold mb-3 rounded-sm hover:bg-black hover:text-white text-black' href='/login'>Logout</Link>
      </div>
    </Layout>
  )
}

export default perfil