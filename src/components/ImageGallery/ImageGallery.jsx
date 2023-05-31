import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { nanoid } from "nanoid";

export const ImageGallery = ({ imagesToRender }) => {
    if (imagesToRender.length !== 0) {
        return (
        <ul className="ImageGallery">
            {imagesToRender.map(image => {
                return <ImageGalleryItem key={nanoid()} id={image.id} img={image.webformatURL} imgModal={image.largeImageURL} />
            })}
        </ul>
        )
    }
}


 