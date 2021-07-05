import styled from 'styled-components';
import newsBg from '../assets/newsBg.png';
import newsIcon from '../assets/newsIcon.png';
import arrow from '../assets/arrowDown.png';
import arrowActive from '../assets/arrowActive.png';
import { Link } from 'react-router-dom';
import { CommonContentWrap } from '../../Common/styled/components';

export const NewsWrap = styled.div`
    width: 42%;
    height: 220px;
    padding: 30px 35px 50px 40px;
    background: url(${newsBg}) no-repeat;
    background-size: cover;
`;

export const NewsContent = styled.div`
    width: ${props => props.all ? "90%" : "100%"};
    margin: ${props=> props.all ? '30px auto' : '0 auto'};
`;

export const NewsItemLink = styled(Link)`
    font-family: ${props => props.big ? "Philosopher" : "OpenSans"};
    font-size: ${props => props.big ? "20px" : "14px"};
    line-height: 20px;
    font-weight: 400;
    color: #fcedc0;
    transition: .5s;
`;

export const NewsContentItem = styled(CommonContentWrap)`
    margin: 25px 0;

    background: rgba(0,0,0, 0.2);
    border: 1px solid rgba(206, 205, 205, 0.3);
    transition: .3s;

    &:hover {
        box-shadow: inset 0 0 10px rgba(206, 205, 205, 0.4);

        img {
            transform: scale(1.01);
            box-shadow: 0 0 8px rgba(0,0,0,0.3);
        }
    }

    &:hover ${NewsItemLink} {
        text-decoration: underline;
    }
`;

export const AllNewsWrap = styled.div`
    width: 95%;
    margin: 0 auto;
    
    padding: 30px 35px 10px 40px;
    background: url(${newsBg});
    background-size: cover;
`;

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


export const NewsItemArrow = styled.span`
    width: 8px;
    height: 12px;
    background: url(${arrow}) no-repeat;
    transition: .5s;
`;