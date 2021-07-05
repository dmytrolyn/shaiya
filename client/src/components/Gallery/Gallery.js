import React from 'react';
import styles from './styles/styles.module.css';
import { GallerySlider, VideoLink } from './styled/components';
import { PlayIcon } from '../Common/Icons/Icons';
import img1 from './images/screenshot1.jpg';
import img2 from './images/screenshot2.jpg';
import img3 from './images/screenshot3.jpg';
import img4 from './images/screenshot4.jpg';

const Gallery = ({ openModal }) => {
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
                <VideoLink onClick={() => openModal(true, { preview: 'https://gamaem.ru/wp-content/uploads/2020/09/-e1599741158136.jpg', source: 'https://www.youtube.com/embed/qXCWezBpugw' })}><PlayIcon className={styles.play} /></VideoLink>
            </div>
            <div>
                <img src={img2} alt="img" />
                <VideoLink><PlayIcon className={styles.play} /></VideoLink>
            </div>
            <div>
                <img src={img3} alt="img" />
                <VideoLink><PlayIcon className={styles.play} /></VideoLink>
            </div>
            <div>
                <img src={img4} alt="img" />
                <VideoLink><PlayIcon className={styles.play} /></VideoLink>
            </div>
        </GallerySlider>
    )
}

export default Gallery;