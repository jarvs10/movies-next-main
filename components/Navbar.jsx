import Link from 'next/link'
import React from 'react'
import {usePathname} from 'next/navigation'
import { movieandseries } from '@/context/MovieContextProvider'

const Navbar = () => {

  const {user} = movieandseries();

  const pathname = usePathname();

  return (
    <nav className='bg-black text-white flex justify-between px-4 py-4 items-center'>
      <Link href={'/'}>
        <img className='h-24' src="https://play-lh.googleusercontent.com/_nANpYA2cXZv0Ll0Ibyv2FZXoYGrwbuwR0WCa-VfQ76-TsUW5XWRACIZnjqYPc4mKpg=h500" alt="logo" />
      </Link>
      <Link className={pathname === '/' ? 'text-2xl underline font-bold' : 'text-2xl font-bold'} href={'/'}>Peliculas</Link>
      <Link className={pathname === '/series' ? 'text-2xl underline font-bold' : 'text-2xl font-bold'} href={'/series'}>Series</Link>
      <Link className={pathname === '/favoritos' ? 'text-2xl underline font-bold' : 'text-2xl font-bold'} href={'/favoritos'}>Favoritas</Link>
      <div className='flex gap-4 items-center'>
        <Link className={pathname === '/login' ? 'text-indigo-500 font-bold text-lg' : 'hover:text-indigo-500 font-bold text-lg'} href='/login'>Login</Link>
        <Link className={pathname === '/register' ? 'text-indigo-500 font-bold text-lg' : 'hover:text-indigo-500 font-bold text-lg'} href='/register'>Registro</Link>
        {
          user ? 
          <>
            <Link className='hover:text-indigo-500 font-bold text-lg' href='/perfil'>
              <img className='w-8' src="/img/usuario.png" alt="avatar" />
            </Link>
          </>
           : ''
        }
      </div>
    </nav>
  )
}

export default Navbar