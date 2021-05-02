import React from 'react';
import styles from './styles/styles.module.css';
import { GallerySlider } from './styled/components';
import img1 from './images/screenshot1.jpg';
import img2 from './images/screenshot2.jpg';
import img3 from './images/screenshot3.jpg';
import img4 from './images/screenshot4.jpg';

const Gallery = () => {
    const settings = {
        autoplay: false,
        adaptiveHeight: true,
        arrows: true,
        infinite: true,
        centerMode: true,
        className: styles.gallery,
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: false,
        swipeToSlide: true
    }
    return (
        <GallerySlider {...settings} >
            <div>
                <img src={img1} alt="img" />
            </div>
            <div>
                <img src={img2} alt="img" />
            </div>
            <div>
                <img src={img3} alt="img" />
            </div>
            <div>
                <img src={img4} alt="img" />
            </div>
        </GallerySlider>
    )
}

export default Gallery;