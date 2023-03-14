import { movieType } from "@/types/types";
import { FC } from "react";
import styles from '../styles/movie-page.module.css';

type movieInfoProps = {
  movie: movieType,
}

const MovieInfo:FC<movieInfoProps> = ({movie}) => {
  const {imdbID, imdbRating, Title, Plot, Poster, Year, Actors} = movie
  if (!movie) {
    return <div>He do not fave info about this movie</div>
  }

  return (
    <>
      <article id={imdbID} className={styles.article}>
        <div className="row">
          <div className={`${styles.ibg} ${styles.column__img}`}>
            <img src={Poster} alt="poster photo"/>
          </div>
          <div className={styles.column__info}>
            <h1 className={styles.title}>{Title}</h1>
            <h2 className={styles.release}>Release: {Year}</h2>
            <h2 className={styles.rating}>Rating imdb: {imdbRating}</h2>
            <div className={styles.actors}>Actors: {Actors}</div>
          </div>
        </div>
        <p className={styles.description}>{Plot}</p>
      </article>
    </>
  );
}

export default MovieInfo;
