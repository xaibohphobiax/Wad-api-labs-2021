import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        // eslint-disable-next-line no-undef
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error;
        });
};
//Topic 11 - I've completed all my labs!

export const getTrendingMovies = () => {
    return fetch(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_KEY}&language=en-US&page=2`
    ).then((response) => {
      if (!response.ok) {
        console.log(response);
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error;
    });
  };


export const getPopularMovies = () => {
  return fetch(
    // eslint-disable-next-line no-undef
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=3`
  ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  })
    .catch((error) => {
      throw error;
    });
};


export const getPeople = () => {
  return fetch(
    // eslint-disable-next-line no-undef
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=1&sort_by=popularity.desc`
  ).then((response) => {
    if (!response.ok) {
      console.log(response);
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error;
 });
};