import Layout from '@/components/Layout'
import ListFavorites from '@/components/ListFavorites';
import { movieandseries } from '@/context/MovieContextProvider'
import React from 'react'

const favoritos = () => {

  const {favorito} = movieandseries();

  return (
    <Layout>
      <div className='grid md:grid-cols-3 min-h-screen'>
        {
          favorito.map(video => {
            return (
              <ListFavorites 
                key={video.id}
                video={video}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default favoritos