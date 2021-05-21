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

### Workaround for Apple m1
``` shell
brew install vips
yarn rebuild sharp
yarn set resolution sharp@npm:0.28.2
```

Then remove `"gatsby-plugin-favicon": "^3.1.6",` from `package.json` under website and remove
 ``` json
     {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicons/favicon-32x32.png',

        // WebApp Manifest Configuration
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        themeColor: '#fff',
        display: 'standalone',
        orientation: 'any',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
 ```
from `gatsby-config.json`.

Try to run `yarn` again

## Docker

For production we use Docker, you can build and test the Docker images locally.
You can either build and start all services by using docker-compose:


```
make build-website build-cms
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
[infrastructure](./packages/infrastructure) | Terraform Infrastructure as Code for Azure
