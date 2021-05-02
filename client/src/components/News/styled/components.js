import styled from 'styled-components';
import newsBg from '../assets/newsBg.png';
import newsIcon from '../assets/newsIcon.png';
import arrow from '../assets/arrowDown.png';
import arrowActive from '../assets/arrowActive.png';
import { Link } from 'react-router-dom';

export const NewsWrap = styled.div`
    width: 42%;
    height: 220px;
    padding: 30px 35px 50px 40px;
    background: url(${newsBg}) no-repeat;
    background-size: cover;
`;

export const NewsContent = styled.div`
    width: ${props => props.all ? "90%" : "100%"};
    margin: 0 auto;
`;

export const AllNewsWrap = styled.div`
    width: 95%;
    margin: 0 auto;
    
    padding: 30px 35px 10px 40px;
    background: url(${newsBg});
    background-size: cover;
`

export const NewsItem = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 25px;
    transition: all 0.4s ease-in-out;
    position: relative;

    &:before {
        content: "";
        background-image: url(${newsIcon});
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        margin-right: 10px;
        padding-left: 34px;
        padding-top: 34px;
    }

    &:hover {
        *:not(:after) {
            filter: brightness(160%);
        }
    }

    &:hover a {
        text-decoration: underline;
    }

    &:hover p {
        opacity: 1;
    }

    &:hover span {
        margin-left: 20px;
        background: url(${arrowActive}) no-repeat;
    }
`;

export const NewsItemLink = styled(Link)`
    text-decoration: none;
    font-family: OpenSans;
    font-size: ${props => props.big ? "20px" : "14px"};
    line-height: 20px;
    font-weight: 400;
    color: #fcedc0;
    transition: .5s;
`;

export const NewsItemArrow = styled.span`
    width: 8px;
    height: 12px;
    background: url(${arrow}) no-repeat;
    transition: .5s;
`;