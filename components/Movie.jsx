import Image from "next/image";

const Movie = ({ movie }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="text-white cursor-pointer hover:scale-105 transition duration-300">
      <Image
        src={`${base_url}${movie.poster_path}`}
        width={130}
        height={200}
        layout="fixed"
        className="object-contain rounded-lg"
        alt="movie"
      />

      <h3 className="text-white mt-0">{movie.title}</h3>
    </div>
  );
};

export default Movie;
