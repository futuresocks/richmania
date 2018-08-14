const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const albums = JSON.parse(this.responseText);
  console.log(albums);
  renderAlbums(albums);
}

const renderAlbums = function(albums){
  let mainDiv = document.getElementById('main-container');

  albums.forEach(album => {
    let img = document.createElement('img');
    img.classList.add('cover')
    img.src = album.image;
    img.value = album.title;
    img.addEventListener('click', imageClick)
    mainDiv.appendChild(img);
  })
}

const imageClick = function(){
  console.log(event);
}

const requestCompleter = function(){
  if(this.status !== 200) return;
  console.log(this.responseText);
}

const handleSelectChanged = function(){
  let searchString = event.target.value.split(' ').join('+');
  console.log(searchString);
  const url = `http://localhost:3000/api/albums/artist=${searchString}`;
  makeRequest(url, requestCompleter);
}


const populateSelector = function(albums){
  const select = document.createElement('select');
  albums.forEach(function(album, index){
    let option = document.createElement('option');
    option.innerText = album.title;
    option.value = album.artist;
    select.appendChild(option);
  })
  const mainDiv = document.getElementById('main-container');
  mainDiv.appendChild(select);
  select.addEventListener('change', handleSelectChanged)
}

const app = function(){
  const url = "http://localhost:3000/api/albums/all";
  makeRequest(url, requestComplete);
}

window.addEventListener('DOMContentLoaded', app);
