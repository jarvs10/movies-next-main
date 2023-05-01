import Layout from "@/components/Layout";
import ListMovies from "@/components/ListMovies";
import axios from "axios";

export default function Home({ movies }) {

  return (
    <Layout
      title={'MoviesApp'}
      description={'movies app description'}
    >

      <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 mt-8">
        {
          movies.map(movie => {
            return (
              <ListMovies 
                key={movie.id}
                movie={movie}
              />
            )
          })
        }
      </div>

    </Layout>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=b7aff3f1f9defe16a2fe8864dc11e575');

  return {
    props: {
      movies: data.results
    }
  }
}