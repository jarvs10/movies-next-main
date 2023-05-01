import React from 'react'
import {useRouter} from 'next/navigation'

const ListMovies = ({movie}) => {

  const router = useRouter();

  const {title, overview, poster_path, release_date, id} = movie;

  return (
    <div className='text-center shadow-md rounded-md'>
      <h2 className='text-white font-bold text-2xl mb-4'>Title: <span>{title}</span></h2>
      <img className='w-4/5 mx-auto' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" />
      <p className='text-white font-semibold mt-3'>Estreno: {release_date}</p>
      <p className='text-white mt-3'>{overview}</p>
      <button onClick={() => router.push(`infomovie/${id}`)} className='mt-3 font-bold py-2 px-7 bg-white mb-3 hover:bg-black hover:text-white rounded-md'>More..</button>
    </div>
  )
}

export default ListMovies