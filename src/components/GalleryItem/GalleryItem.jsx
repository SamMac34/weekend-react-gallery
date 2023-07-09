import axios from 'axios';
import {useState} from 'react';

// Render each image; props = 'image object' and fetchImages().
function GalleryItem( props ) {

    const [ active, setActive ] = useState(true);

    // Update like count and render updated info to page
    const likeImage = () => {
        axios.put(`/gallery/like/${props.image.id}`)
        .then(response => {
            console.log('In PUT:', response)
            props.fetchImages();
        }).catch(error => {
            console.log('In GalleryItem, error is:', error);
        });
    };

    // Handle toggle between image or image description.
    const handleToggle = () => {
        setActive(isActive => {
            return !isActive;
        });
    };


    return (
        <div key={props.image.key} className="image-container">
            {active ? (
                <img 
                    src={props.image.path}
                    alt="goat"
                    onClick={() => handleToggle()}
                />
                ) : (
                <div className="description-container" onClick={() => handleToggle()}>
                    {props.image.description}
                </div>
                )
            }
        {<button onClick={likeImage}>❤️ Like this photo!</button>}
        {<div className="likes-counter">{props.image.likes} people liked this!</div>}
        </div>
    )
}

export default GalleryItem;