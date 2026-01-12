# MovieAPI: Server-Side Development

## Overview
Building the server-side component of a movie web application.  Users of the application will be able to access information about different movies, genres, and directors.  Users will also be able to create a list of their favorite movies, update personal information, and deregister if they no longer want to use the application

## Project Features
* Return a list of all movies to the user
* Return data about a movie by title to the user
* Return data about a genre
* Return data about a director by name
* Allow new users to register
* Allow users to update personal information
* Allow users to add and remove movies from a favorites list
* Allow users to delete their account

## Technical Requirements
* The API is bulit using Node.js and Express and follows REST architecture with URL endpoints for all CRUD operations
* Databases is built with MongoDB and uses Mongoose for modeling the business logic
* The API has user authentication and authorization implemented
* The API includes data validation and data security
* All endpoints are tested in Postman to ensure they work correctly
* The API is deployed on Heroku

## API Endpoints

|  Endpoint       |  Method  |  Description                |
|-----------------|----------|-----------------------------|
| /movies         | GET      | Get all movies              |
| /movies/:title  | GET      | Get movie details by title  |
| /movies/genre/:genre name | Get | Get genre info  |
|