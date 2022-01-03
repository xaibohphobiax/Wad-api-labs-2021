import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import {PeopleContext} from './peopleContext';
import React from 'react';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}
 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }

export const People = () => {
    const context = useContext(PeopleContext);
    return <>
        <h2>People</h2>
        <div>
            {context.people.results.map(people =>{ return <>{people.id},{people.name}<br /></>})}

        </div>
    </>
}


export const PopularPage = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Popular</h2>
        <div>
            {context.movies.results.map(movie =>{ return <>{movie.id},{movie.title}<br /></>})}
        </div>
    </>
}
 