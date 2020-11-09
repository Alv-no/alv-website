# Alv.no

This is the code repo for development of the new websites for Alv.no

## Development setup

Install Git, Node and Yarn, and whatever code editor you prefer.

As of writing this readme the newest version of node and yarn is as follows:

```
$ node --version
 v15.0.1
$ yarn --version
 2.3.3
```

Once ready to develop the website run:

```
yarn
yarn workspace website run dev
```

## Docker

For production we use Docker, you can build and test the Docker images locally.
You can either build and start all services by using docker-compose:


```
docker-compose build
docker-compose up -d
```

And then browse it using a web browser at `localhost:8080`, `website.localhost/` and `cms.localhost/`.

Or build and start individual service as following:


```
docker build -f website.Dockerfile -t website .
docker run -it -p 8080:80 website
```

And then browse it using a web browser at `localhost:8080`.

## Packages

Package                       | Description
-------                       | -----------
[website](./packages/website) | Gatsby-powered website
[cms](./packages/cms)         | Sanity CMS
