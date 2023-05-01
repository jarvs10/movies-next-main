import Layout from '@/components/Layout';
import { movieandseries } from '@/context/MovieContextProvider';
import axios from 'axios';
import React from 'react'

const InfoSerie = ({serie}) => {

  const {favorito, setFavorito} = movieandseries();

  const {name, overview, poster_path, first_air_date } = serie;

  return (
    <Layout>
      <div className='text-center shadow-md rounded-md mt-8 w-4/5 mx-auto'>
        <h2 className='text-white font-bold text-2xl mb-4'>Title: <span>{name}</span></h2>
        <img className='w-3/5 mx-auto' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="poster" />
        <p className='text-white font-semibold mt-3'>Estreno: {first_air_date}</p>
        <p className='text-white mt-3 mb-3'>{overview}</p>
        <button onClick={() => setFavorito([...favorito, serie])} className='py-2 px-6 bg-white font-bold mb-3 rounded-sm hover:bg-black hover:text-white'>Add to favorites</button>
      </div>
    </Layout>
  )
}

export default InfoSerie

export const getStaticPaths = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=b7aff3f1f9defe16a2fe8864dc11e575')

  return {
    paths: data.results.map(serie => ({
      params: { id: serie.id.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=b7aff3f1f9defe16a2fe8864dc11e575`)

  return {
    props: {
      serie: data
    }
  }
}