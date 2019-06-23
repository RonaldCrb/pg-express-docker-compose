# pg-express-docker-compose

This is a small sample of a containerized setup for NodeJS + ExpressJS + PostgreSQL development environment.

## Usage

1- Clone this repo

2- cd into the directory 

`$ cd pg-express-docker-compose` 

3- run npm install

`$ npm install`

4- run docker-compose

`$ docker-compose up`

Both containers run with officially sourced Linux Alpine based images

postgres:11-alpine
node:10-alpine

- always use docker-compose version 2.x (depends_on feature is NOT supported in version 3.x)
