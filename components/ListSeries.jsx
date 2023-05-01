import { useRouter } from 'next/navigation';
import React from 'react'

const ListSeries = ({serie}) => {

  const router = useRouter()

  const {name, overview, poster_path, first_air_date, id} = serie;

  return (
    <div className='text-center shadow-md rounded-md'>
      <h2 className='text-white font-bold text-2xl mb-4'>Title: <span>{name}</span></h2>
      <img className='mx-auto w-4/5' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" />
      <p className='text-white font-semibold mt-3'>Estreno: {first_air_date}</p>
      <p className='text-white mt-3'>{overview}</p>
      <button onClick={() => router.push(`infoserie/${id}`)} className='mt-3 font-bold py-2 px-7 bg-white mb-3 hover:bg-black hover:text-white rounded-md'>More..</button>
    </div>
  )
}

export default ListSeries