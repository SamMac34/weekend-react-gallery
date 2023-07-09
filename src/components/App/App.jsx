import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  // function to GET images from galleryItems
  const fetchImages = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      // console.log('In fetchImages, res is:', response, response.data);
      setGalleryList(response.data)
    }).catch(error => {
      console.log('Error fetching images, error is:', error);
    })
  }

  useEffect(() => {
    fetchImages();
  }, []);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList galleryList={galleryList} fetchImages={fetchImages}/>
        {/* <img src="images/goat_small.jpg"/>
        <img src="images/goat_small.jpg"/> */}
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
