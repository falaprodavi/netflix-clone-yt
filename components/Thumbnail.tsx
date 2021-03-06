import Image from 'next/image'
import { Movie } from '../typings'

interface Props {
  movie: Movie
  // When using firebase
  // movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  return (
    <>
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
     ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          layout="fill"
          alt={movie.name}
        />

        <div className="relative max-w-xs p-2 text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl">
          {movie.name || movie.title}
        </div>
      </div>
    </>
  )
}

export default Thumbnail
