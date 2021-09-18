# Nodejs & Docker

Your app needs only to have a script called **start** in your package.json. This is a standard.

```
"scripts": {
  "start": "node index.js"
}
```

Also if your app needs a kind of transpilation, compilation or build, the standard is a script called **build**

```
"scripts": {
  "start": "node index.js",
  "build": "here my commands to build",
}
```

## Build with docker

Just run this:

```
docker build -t hello-world:1.0.0 .
```

## Run with docker

With just docker if you have an existent database

```
docker run -d -p 8081:8080 --name hello-world hello-world:1.0.0
```

Open your favorite browser at: `http://localhost:8081`
