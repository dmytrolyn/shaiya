import styled from 'styled-components';
import Slider from 'react-slick';
import arrowBg from '../assets/arrowBg.png';
import arrowBgHover from '../assets/arrowBgHover.png';
import arrowRight from '../assets/arrowRight.png';
import arrowLeft from '../assets/arrowLeft.png';
import { pointer } from '../../../utils/cPointer';

export const GallerySlider = styled(Slider)`
    .slick-track {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 100%;
    }

    .slick-list {
        width: 85%;
        height: 165px;
        overflow: hidden;

        padding: 0 !important;

        display: flex;
        align-items: center;
        justify-content: space-between;

        transition: .5s;
    }

    .slick-slide {
        width: 300px !important;
        height: 100%;
        margin: 0 10px;
        outline: none;

        div {
            height: 100%;
            width: 100%;
        }

        img {
            width: 100%;
            height: 100%;
        }

        transition: .5s;
    }


    .slick-current {
        /* transform: scale(1.2); */
    }

    .slick-arrow {
        margin-left: -20px;
        cursor: ${pointer};
        transition: -1s;
        outline: none;
        position: relative;
        width: 80px;
        height: 70px;
        border: none;
        background: url(${arrowBg}) no-repeat;
        color: transparent;
    }

    .slick-arrow:hover {
        background: url(${arrowBgHover}) no-repeat;
        filter: brightness(200%);
        background-size: 80px 70px;
        background-position: 8px;
    }

    .slick-prev {
        &:before {
            content: "";
            padding-left: 8px;
            padding-top: 1px;
            background-image: url(${arrowLeft});
            background-repeat: no-repeat;
            background-position: center;
            margin-left: 43px;
        }
    }

    .slick-next {
        &:before {
            content: "";
            padding-left: 12px;
            padding-top: 1px;
            background-image: url(${arrowRight});
            background-repeat: no-repeat;
            background-position: center;
            margin-left: 45px;
        }
    }
`