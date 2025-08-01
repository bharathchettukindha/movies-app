import React, { useState, useMemo } from 'react';

const Watchlist = ({ movies, deleteMovie }) => {
  const [search, setSearch] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');

  // Get unique genres dynamically
  const genreList = useMemo(() => ['All', ...new Set(movies.map((m) => m.genre))], [movies]);

  // Filter movies based on search and genre
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const title = movie.title?.toLowerCase() || '';
      const searchText = search.trim().toLowerCase();
      const matchesSearch = title.includes(searchText);
      const matchesGenre = activeGenre === 'All' || movie.genre === activeGenre;
      return matchesSearch && matchesGenre;
    });
  }, [movies, search, activeGenre]);

  return (
    <div className="p-4">
      {/* Genre Filter */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        {genreList.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-6 py-2 rounded-full font-medium shadow ${
              activeGenre === genre ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies by title..."
          className="w-72 h-12 px-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Movie Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-center border border-gray-300 shadow">
          <thead className="bg-gray-100 text-gray-800 font-semibold">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Rating</th>
              <th className="p-4">Popularity</th>
              <th className="p-4">Genre</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredMovies.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-10 text-gray-500">
                  No movies found matching your criteria.
                </td>
              </tr>
            ) : (
              filteredMovies.map((movie) => (
                <tr key={movie.id} className="border-t hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 gap-4 text-left">
                    <img
                      src={movie.poster_path}
                      alt={movie.title || 'No Title'}
                      className="h-24 w-36 object-cover rounded"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/150x220?text=No+Image';
                      }}
                    />
                    <span className="text-black font-medium">{movie.title || 'Untitled'}</span>
                  </td>
                  <td className="text-black">{movie.rating ?? 'N/A'}</td>
                  <td>{movie.popularity ?? 'N/A'}</td>
                  <td>{movie.genre}</td>
                  <td>
                    <button
                      onClick={() => deleteMovie(movie.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Watchlist;
