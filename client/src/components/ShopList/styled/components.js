import styled from 'styled-components';
import bg from '../assets/icon_bg.png';
import coin from '../assets/coin.png';
import glider from '../assets/glider.png';
import { pointer } from '../../../utils/cPointer';
import { Link } from 'react-router-dom';

export const TabsWrap = styled.div`
    margin: 0 auto 50px auto;
    width: 90%;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    
    &::before {
        content: "";
        position: absolute;
        top: -10px;

        width: 100%;
        height: 8px;

        background: linear-gradient(to bottom, rgba(51, 51, 153, 0.3), rgba(51, 51, 204, 0.3) 30%, rgba(102, 102, 255, 0.3) 70%, transparent 100%);
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -10px;

        width: 100%;
        height: 8px;

        background: linear-gradient(to bottom, rgba(51, 51, 153, 0.3), rgba(51, 51, 204, 0.3) 30%, rgba(102, 102, 255, 0.3) 70%, transparent 100%);
    }
`;

export const Tabs = styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    color: rgba(255,255,255, 0.9);
`;

export const Tab = styled.div`
    padding: 10px 0;
    margin: 0 10px;

    font-family: Open-Sans;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;

    position: relative;

    cursor: ${pointer};

    &:hover {
        &::before {
            content: "";
            position: absolute;
            top: -9px;

            width: 110%;
            height: 20px;

            margin-left: -5%;

            background: linear-gradient(to bottom, rgb(51, 51, 204), rgb(113, 113, 218), 20%, transparent 100%);
        }
    }

    ${props => props.active && `
        &::before {
            content: "";
            position: absolute;
            top: -9px;

            width: 110%;
            height: 20px;

            margin-left: -5%;

            background: linear-gradient(to bottom, rgb(51, 51, 204), rgb(113, 113, 218), 20%, transparent 100%);
        }
    `}
`;

export const ShopIcon = styled.div`
    width: 85px;
    height: 85px;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        background: url(${bg}) no-repeat;
        background-size: 100%;
        background-position: center;
    }

    img {
        width: 52px;
        height: 52px;

        border-radius: 10px;
    }
`;

export const BalanceLink = styled(Link)`
    position: relative;
    font-size: 22px;
    font-family: Open-Sans;

    color: #f7a713;
    text-decoration: underline;
    transition: .2s;

    margin-right: 90px;

    cursor: ${pointer};

    &:hover {
        filter: brightness(1.2);
    } 

    &::before {
        content: "";
        position: absolute;
        top: -5px;
        right: -50px;
        width: 40px;
        height: 40px;

        background: url(${coin}) no-repeat;
        background-size: 100%;
        background-position: center;
    }
`;

export const TabsGlider = styled.div`
    width: 350px;
    height: 97px;

    ${props => props.tabs && `
        width: ${350 / (props.tabs * 0.5)}px;
        height: ${97 / (props.tabs * 0.5)}px;
    `}

    transition: .4s;
    pointer-events: none;

    position: absolute;
    top: 0px;
    transform: ${({ active }) => `translateX(${-25 + active * 50}%)`};

    background: url(${glider}) no-repeat;
    background-size: 100%;
    background-position: center;
`;