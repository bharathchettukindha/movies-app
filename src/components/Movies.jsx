import React, { useState } from 'react';
import Moviecard from './Moviecard';
import Pagination from './Pagination';

export const allMovies = [
  {
    id: 2,
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    genre: "Action"
  },
  {
    id: 3,
    title: "Interstellar",
    poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    rating: 8.6,
    genre: "Adventure"
  },
  {
    id: 4,
    title: "The Matrix",
    poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    genre: "Sci-Fi"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    poster_path: "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
    rating: 8.9,
    genre: "Crime"
  },
  {
    id: 6,
    title: "Fight Club",
    poster_path: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    rating: 8.8,
    genre: "Drama"
  },
  {
    id: 7,
    title: "Forrest Gump",
    poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    rating: 8.8,
    genre: "Drama"
  },
  {
    id: 8,
    title: "The Shawshank Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 9.3,
    genre: "Drama"
  },
  {
    id: 9,
    title: "The Godfather",
    poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 9.2,
    genre: "Crime"
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    poster_path: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    rating: 8.9,
    genre: "Fantasy"
  },
  {
    id: 11,
    title: "Avengers: Endgame",
    poster_path: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    rating: 8.4,
    genre: "Action"
  },
  {
    id: 13,
    title: "Titanic",
    poster_path: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    rating: 7.9,
    genre: "Romance"
  },
  {
    id: 14,
    title: "The Lion King",
    poster_path: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    rating: 8.5,
    genre: "Animation"
  },
  {
    id: 15,
    title: "Joker",
    poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    rating: 8.5,
    genre: "Drama"
  },
  {
    id: 16,
    title: "Toy Story",
    poster_path: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    rating: 8.3,
    genre: "Animation"
  },
  {
    id: 17,
    title: "Coco",
    poster_path: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
    rating: 8.4,
    genre: "Animation"
  },
  {
    id: 18,
    title: "Frozen",
    poster_path: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    rating: 7.4,
    genre: "Animation"
  },
  {
    id: 20,
    title: "Black Panther",
    poster_path: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    rating: 7.3,
    genre: "Action"
  },
  // Additional 30 movies...
  {
    id: 21,
    title: "Doctor Strange",
    poster_path: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg",
    rating: 7.5,
    genre: "Fantasy"
  },
  {
    id: 22,
    title: "Shazam!",
    poster_path: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    rating: 7.0,
    genre: "Action"
  },
  {
    id: 24,
    title: "Guardians of the Galaxy",
    poster_path: "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    rating: 8.0,
    genre: "Sci-Fi"
  },
  {
    id: 25,
    title: "Captain Marvel",
    poster_path: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    rating: 6.8,
    genre: "Action"
  },
  {
    id: 26,
    title: "The Avengers",
    poster_path: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    rating: 8.1,
    genre: "Action"
  },
  {
    id: 27,
    title: "Iron Man",
    poster_path: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    rating: 7.9,
    genre: "Action"
  },
  {
    id: 28,
    title: "Thor",
    poster_path: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    rating: 7.0,
    genre: "Fantasy"
  },
  {
    id: 30,
    title: "Logan",
    poster_path: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
    rating: 8.1,
    genre: "Action"
  },
  ...Array(100).fill().map((_, index) => ({
    id: index + 31,
    title: `Movie ${index + 31}`,
    poster_path: `https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg+${index + 31}`,
    rating: (Math.random() * 2 + 7).toFixed(1),
    genre: ["Action", "Drama", "Comedy", "Sci-Fi", "Fantasy"][Math.floor(Math.random() * 5)]
  }))
];


const Movies = ({ addToWatchlist }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 14;

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(allMovies.length / moviesPerPage);

  return (
    <div>
      <div className="text-black text-2xl text-center mt-10 mb-5 font-bold">
        Trending Movies
      </div>
      <div className="flex flex-wrap justify-start items-center gap-4 px-8 ml-13">
        {currentMovies.map((movie) => (
          <Moviecard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Movies;
