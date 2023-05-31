import { modalka } from "components/Modal/Modal"


export const ImageGalleryItem = ({ id, img, imgModal }) => {
    return (
        <li className="ImageGalleryItem" key={id} onClick={() => modalka(imgModal) }>
            <img src={img} alt="some jpegs"/> 
        </li>
    )
}