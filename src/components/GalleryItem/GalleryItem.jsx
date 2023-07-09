import axios from 'axios';
import {useState} from 'react';
// import './GalleryItem.css'

// Props = (image object)
function GalleryItem( props ) {

    const [ active, setActive ] = useState(true);

    const favoriteImage = () => {
        // axios.put(`/gallery/${props.image.id}`)
        axios.put(`/gallery/likes/${props.image.id}`)

        .then(response => {
            props.fetchImages();
        }).catch(error => {
            console.log('In GalleryItem, error is:', error);
        });
    };

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
        {<button onClick={favoriteImage}>❤️ Like this photo!</button>}
        {<div className="likes-counter">{props.image.likes} people liked this!</div>}
        </div>
    )
}

export default GalleryItem;