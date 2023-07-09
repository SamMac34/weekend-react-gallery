import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  // function to GET images from galleryItems
  const fetchImages = () => {
    axios.get(`/gallery`)
      .then(response => {
      setGalleryList(response.data)
    }).catch(error => {
      console.log('Error fetching images, error is:', error);
    })
  }

  // Get images on page load
  useEffect(() => {
    fetchImages();
  }, []);


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} fetchImages={fetchImages}/>
      </div>
    );
}

export default App;
