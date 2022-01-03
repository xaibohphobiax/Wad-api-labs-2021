# Assignment 2 - Web API.
​
Name: Constantin Suttner
​
## Features.
​
...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1: Added API route and endpoint upcoming movies
 + Feature 2: Added API route and endpoint trending movies
 + Feature 3: Added API route and endpoint popular movies
 + Feature 4: Added API route and endpoint popular people
​
## Installation Requirements
​
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 
​
Describe getting/installing the software
​
```bat
git clone https://github.com/xaibohphobiax/Wad-api-labs-2021.git
```
​
followed by installation
​
```bat
git install
```
​
## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:
​
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
mongoDB=YourMongoURL
seedDb=true
secret=YourSecret
TMDB_KEY=YourTMDB_Key
```
​
​
## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
|  GET:

| /api/movies |Gets a list of movies 
| /api/movies/:id | Get a Movie 
| /api/movies/:id/reviews | Get all reviews for movie 
| /api/movies/tmdb/upcoming | Get upcoming movies where language is english from page 1
| /api/movies/tmdb/trending | Get trending movies where language is english from page 2
| /api/movies/tmdb/popular | Get popular movies where language is english from page 3
| /api/people | Get popular people where language is english from page 1, popularity descending
| /api/genres | Get genres
| /api/users | Get all users
| /api/user/:userName/favourites | Get all favourites


| POST: 

| /api/movies/:id/reviews | Create a new review for Movie
| /api/users | Create user with password which is at least 5 characters long contain one number and one letter
​| /api/users/:userName/favourites | Adds favourite movies

​| PUT:

| /api/users/:id | updates user
## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
​
The people and movies route are protected and only accessable while being authenticated with the right bearer token.
app.use('/api/people', passport.authenticate('jwt', {session: false}), peopleRouter);
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);

