import styled from 'styled-components';
import Slider from 'react-slick';
import { pointer } from '../../../utils/cPointer';
import padBg from '../assets/padBg.png';
import arrowLeft from '../assets/arrowLeft.png';
import arrowRight from '../assets/arrowRight.png';


export const SliderComponent = styled(Slider)`
    .slick-track {
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slick-list {
        width: 100%;
        height: 100%;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .slick-slide {
        height: 100%;
        position: relative;
    }

    .slick-arrow {
        color: transparent;
        border: none;
        outline: none;
        width: 0;
        height: 0;
        cursor: ${pointer};
    }

    .slick-prev {
        position: absolute;
        padding-left: 8px;
        padding-top: 12px;
        background: url(${arrowLeft}) no-repeat;
        background-position: center;
        right: 128px;
        bottom: 44px;
        z-index: 400;
    }

    .slick-next {
        position: absolute;
        padding-left: 8px;
        padding-top: 12px;
        background: url(${arrowRight}) no-repeat;
        background-position: center;
        right: 50px;
        bottom: 44px;
        z-index: 400;
    }
`;

export const ArrowsPad = styled.div`
    position: absolute;
    width: 108px;
    height: 40px;
    background: url(${padBg}) no-repeat;
    right: 40px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: OpenSans;
    font-size: 12px;
    line-height: 60px;
    font-weight: 400;
    letter-spacing: 3px;
    color: #fff;
`;

