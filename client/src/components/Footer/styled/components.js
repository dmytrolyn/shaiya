import styled from 'styled-components';
import arrow from '../assets/arrow.png';
import arrowActive from '../assets/arrowActive.png';

export const FooterItem = styled.li`
    margin-top: 15px;
    display: flex;
    align-items: center;

    &:before {
        content: "";
        background-image: url(${arrow});
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        padding-left: 8px;
        padding-top: 12px;
        margin-right: 10px;
        transition: all 0.5s ease-in-out;
    }

    &:hover a {
        color: #fff;
    }

    &:hover {
        &:before {
            background-image: url(${arrowActive});
            filter: brightness(200%)
        }
    }
`