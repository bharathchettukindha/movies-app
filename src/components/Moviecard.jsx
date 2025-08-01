import React from 'react';


const Moviecard = ({ movie, addToWatchlist }) => {
  return (
    <div className="relative w-48 shadow-lg rounded overflow-hidden bg-gray-100 transition-transform duration-300 hover:scale-90 hover:shadow-lg cursor-pointer">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-full h-72 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
        }}
      />
      <div
        className="absolute top-2 right-2 bg-gray-500 text-white text-lg px-2 py-1 rounded-xl cursor-pointer"
        onClick={() => addToWatchlist(movie)}
        title="Add to Watchlist"
      >
        &#128525;
      </div>
      <div className="p-2 text-center bg-black/60 text-white font-semibold">
        {movie.title}
      </div>
    </div>
  );
};


export default Moviecard;
