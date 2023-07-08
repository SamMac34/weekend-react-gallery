import GalleryItem from '../GalleryItem/GalleryItem';
// import './GalleryList.css'

function GalleryList({ galleryList, fetchImages }) {
    return (
        <>
            {galleryList.map((image) => {
                // console.log('In GalleryList, image data is:', image);
                return (
                <GalleryItem image={image} fetchImages={fetchImages}/>
                )
            })}
        </>
    )
}

export default GalleryList;