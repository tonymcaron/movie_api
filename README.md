# MovieAPI: Server-Side Development

## Overview
Building the server-side component of a movie web application.  Users of the application will be able to access information about different movies, genres, and directors.  Users will also be able to create a list of their favorite movies, update personal information, and deregister if they no longer want to use the application

## Tech Stack

- **Node.js** — Server-side runtime environment  
- **Express** — Web framework for routing and middleware  
- **MongoDB** — NoSQL database for storing movie and user data  
- **Mongoose** — ODM for MongoDB  
- **JWT (JSON Web Tokens)** — User authentication and authorization  
- **Passport.js** — Authentication middleware  
- **Heroku** — Cloud deployment platform  
- **MongoDB Atlas** — Cloud-hosted MongoDB service  
- **HTML & JavaScript** — API documentation and testing interface  

## Project Features
* Return a list of all movies to the user
* Return data about a movie by title to the user
* Return data about a genre
* Return data about a director by name
* Allow new users to register
* Allow users to update personal information
* Allow users to add and remove movies from a favorites list
* Allow users to delete their account

## API Endpoints

### Movie Endpoints

|  Endpoint       |  Method  |  Description                |
|-----------------|----------|-----------------------------|
| /movies         | GET      | Get all movies              |
| /movies/:title  | GET      | Get movie details by title  |
| /movies/genre/:genre name | Get | Get genre info  |
| /movies/directors/:directorName | GET  | Get director info |

### User Endpoints

|  Endpoint |  Method  |  Description  |
|-----------|----------|---------------|
| /users | POST | Creates new user profile |
| /login | POST | Logs into user account |
| /users | GET | View all users and info |
| /users/:username | GET | View user's info |
| /users/:username | PUT | Update user info |
| /users/:username | DELETE | Deletes user account |
| /users/:username/movies/:movieID | POST | Adds movie to user's favorites |
| /users/:username/movies/:movieID | DELETE | Removes movie from user's favorites |