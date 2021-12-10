import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        // eslint-disable-next-line no-undef
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};
//Topic 11 - I've completed all my labs!