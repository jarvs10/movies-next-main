import React from 'react'

const ListFavorites = ({video}) => {

  const {poster_path} = video;

  return (
    <div className='text-center shadow-md rounded-md mt-8 w-4/5 mx-auto py-2'>
      <img className='w-4/5 mx-auto' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" />
    </div>
  )
}

export default ListFavorites