import { movieType } from '@/types/types';
import { GetServerSideProps } from 'next';
import Head from 'next/head'
import { FC } from 'react';
import MovieInfo from '../../components/MovieInfo';

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.params || {};
  const response = await fetch(`https://www.omdbapi.com/?&apikey=9ae0df05&i=${id}`);
  const data = await response.json();
  
  if(!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { movie: data},
  }
};

type movieTypeProps = {
  movie: movieType
}

const Movie:FC<movieTypeProps> = ({movie}) => {
  
  return (
      <>
      <Head>
        <title>Movie page</title>
      </Head>
      <main className='main'>
        <div className="main__container container">
          <MovieInfo movie={movie}/>
        </div>
      </main>
    </>
  )
};

export default Movie;