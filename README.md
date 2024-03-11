# weather-app

* dependency: https://www.npmjs.com/package/postman-request
```
npm postman-request
```

* using ***WeatherStack*** which is a free weather API;

* ***mapbox geocoding*** service;

* Chrome extension: ***JSON fomatter***;

* web-server:
    * handlebars: npm package, like a plugin in Express js.
    * hbs: npm package, deal with dynamic content
    * HTTP request methods:
        * GET: requests a representation of the specified resource.
        * HEAD:  
        * POST:
        * PUT:
        * DELETE:
        * CONNECT:
        * OPTIONS:
        * TRACE:
        * PATCH:
* MongoDB:
    * mongosh:
      ```
      sudo docker exec -it mongodb mongosh
      ```
* docker:
  ```
  sudo docker run -d --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=your_own_password mongo
  ```
