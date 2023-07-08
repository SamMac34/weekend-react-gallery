import axios from 'axios';
// import './GalleryItem.css'


function GalleryItem( props ) {
    // {console.log('In GalleryItem, props is:(image object)')}

    const favoriteImage = () => {
        axios.put(`/gallery/${props.image.id}`)
        .then(response => {
            props.fetchImages();
        }).catch(error => {
            console.log('In GalleryItem, error is:', error);
        })
    }

    const showDescription = () => {
        {onClick ? 
        <img key={props.image.key} src={props.image.path}/> :
        <div>{props.image.description}</div>}
    }


    return (
        <>
        <div onClick={showDescription} key={props.image.key} className="image-container">
            {<img key={props.image.key} src={props.image.path} />}
            {<p className="image-desc">{props.image.description}</p>}
            {<div className="likes-counter">{props.image.likes}</div>}
            {<button onClick={favoriteImage}>Like</button>}
        </div>
        </>
    )
}

export default GalleryItem;