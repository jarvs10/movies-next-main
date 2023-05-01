import Layout from '@/components/Layout'
import { movieandseries } from '@/context/MovieContextProvider'
import axios from 'axios'
import React from 'react'

const InfoMovie = ({ movie }) => {

  const {favorito, setFavorito} = movieandseries();

  const {title, overview, poster_path, release_date} = movie;

  return (
    <Layout>
      <div className='text-center shadow-md rounded-md mt-8 w-4/5 mx-auto'>
        <h2 className='text-white font-bold text-2xl mb-4'>Title: <span>{title}</span></h2>
        <img className='w-3/5 mx-auto' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" />
        <p className='text-white font-semibold mt-3'>Estreno: {release_date}</p>
        <p className='text-white mt-3 mb-3'>{overview}</p>
        <button onClick={() => setFavorito([...favorito, movie])} className='py-2 px-6 bg-white font-bold mb-3 rounded-sm hover:bg-black hover:text-white'>Add to favorites</button>
      </div>
    </Layout>
  )
}

export default InfoMovie


export const getStaticPaths = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b7aff3f1f9defe16a2fe8864dc11e575')

  return {
    paths: data.results.map(movie => ({
      params: { id: movie.id.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b7aff3f1f9defe16a2fe8864dc11e575`)

  return {
    props: {
      movie: data
    }
  }
}