import Layout from '@/components/Layout'
import ListSeries from '@/components/ListSeries'
import axios from 'axios'
import React from 'react'

const series = ({ series }) => {

  return (
    <Layout
      title={'SeriesApp'}
      description={'series app description'}
    >
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 mt-8">
        {
          series.map(serie => {
            return (
              <ListSeries
                key={serie.id}
                serie={serie}
              />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default series

export const getStaticProps = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=b7aff3f1f9defe16a2fe8864dc11e575');

  return {
    props: {
      series: data.results
    }
  }
}