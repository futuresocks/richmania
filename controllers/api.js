const express = require('express');
const apiRouter = new express.Router();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err){
    console.log(err);
    return;
  }

  const db = client.db('richmandb');
  const albumCollection = db.collection('albums');

  console.log('connected to database');

  apiRouter.get('/albums/all', function(req, res){
    albumCollection.find().toArray(function(err, albums){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      albums.sort((albuma, albumb) => albuma.year - albumb.year)

      res.json(albums);
    })
  })

  apiRouter.get('/albums/artist=:artist', function(req, res){
    let searchBand = req.params.artist.split('+').join(" ");
    console.log(searchBand);
    albumCollection.find({artist: searchBand}).toArray(function(err, albums){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(albums);
    })
  })

  apiRouter.get('/songs/all', function(req, res){
    albumCollection.find().toArray(function(err, albums){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      const songs = albums.map(album => album.songs)
                    .reduce((accumulator, album) => accumulator.concat(album))
                    .sort();

      res.json(songs);
    })
  })


})

module.exports = apiRouter;
