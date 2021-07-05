import styled from 'styled-components';
import point from './assets/point.png';
import hover from './assets/hover.png';
import bg from './assets/bg3.png';
import pTop from './assets/platform2.png';
import pBottom from './assets/platform1.png';
import iBg from './assets/game-bg.png';
import msgtxt from './assets/msgtxt.png';
import ctl from './assets/cornertl.png';
import ctr from './assets/cornertr.png';
import cbl2 from './assets/cornerbl2.png';
import ctr2 from './assets/cornertr2.png';

export const CommonContentWrap = styled.div`
    position: relative;

    &::before {
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        bottom: -5px;
        left: -5px;

        filter: brightness(1.7);

        background: url(${cbl2}) no-repeat;
        background-position: center;
        background-size: 100%;
    }

    &::after {
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        top: -5px;
        right: -5px;

        filter: brightness(1.7);

        background: url(${ctr2}) no-repeat;
        background-position: center;
        background-size: 100%;
    }
`;

export const MessageBlock = styled.div`
    width: 85%;
    margin: 30px auto;
    padding: 30px 0;
    border: 0.5px solid #382820;
    background: url(${msgtxt}) no-repeat;
    background-size: 100%;

    color: rgb(197, 183, 183);
    text-align: center;

    font-size: 20px;
    font-family: Philosopher;
    line-height: 24px;

    position: relative;

    a {
        color: #c58026;
        text-decoration: underline;
        transition: .2s;

        &:hover {
            color:  #f7a713;
        }
    }

    &::before {
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        top: -9px;
        left: -9px;
        background: url(${ctl}) no-repeat;
        background-position: center;
        background-size: 100%;
    }

    &::after {
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        top: -7px;
        right: -7px;
        background: url(${ctr}) no-repeat;
        background-position: center;
        background-size: 100%;
    }
`;

export const Title = styled.h2`
    font-size: 34px;
    line-height: 30px;
    font-family: Philosopher;
    font-weight: 400;
    text-transform: uppercase;
    color: #cc7954;
`;

export const BlockTitle = styled(Title)`
    text-align: left;
    font-size: 18px;
    &:before {
        content: "";
        background-image: url(${point});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        padding-left: 10px;
        margin-right: 10px;
    }
`;

export const ContentTitle = styled(Title)`
    font-weight: 600;
    letter-spacing: 1px;
    background: linear-gradient(0deg, #972a18, #ffe294);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: #ffdda9;
`;

export const ContentSideTitle = styled(ContentTitle)`
    margin: 10px auto 0 70px;
`;

export const FormTitle = styled(Title)`
    font-size: ${props => props.size ? `${props.size}px` : "26px"};
    line-height: 26px;
`;

export const ErrorPageTitle = styled(Title)`
    text-align: left;
`;

export const FormSingleTitle = styled(FormTitle)`
    text-align: center;
`;

export const ContentSingleTitle = styled(ContentTitle)`
    font-size: 32px;
    margin-top: 20px;
    text-align: center;
`;

export const BlockSingleTitle = styled(ContentSingleTitle)`
    font-size: 24px;
`;

export const SingleBlockError = styled.p`
    margin-top: 5px;
    font-family: Philosopher;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: rgb(155, 36, 36);
    letter-spacing: 0.5px;
`;

export const ContentOptions = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ContentOption = styled.div`
    position: relative;
    margin: 0 20px;
`;

export const ContentWrap = styled.div`
    width: 100%;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2),
                0 0 40px rgba(0, 0, 0, 0.2);
    position: relative;

    box-shadow: 0 0 10px rgba(5, 6, 10, 0.2),
    0 0 20px rgba(5, 6, 10, 0.2);

    padding: 15px 0;

    &::before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.6;
        background-image: url(${bg});
    }
`;

export const FormError = styled.div`
    margin-top: 5px;
    font-family: OpenSans;
    font-size: 14px;
    line-height: 14px;
    font-weight: 400;
    color: rgb(155, 36, 36);
    letter-spacing: 0.5px;
`;

export const ContentSingleDesc = styled.div`
    text-align: center;
    font-family: Philosopher;
    font-size: 16px;
    font-weight: 400;
    color: rgb(197, 183, 183);
    margin: 5px 100px;

    transition: .5s;
`;

export const ContentMessageSuccess = styled(ContentSingleDesc)`
    color: green;
`;

export const ContentMessageError = styled(ContentSingleDesc)`
    color: #cc0000;
    font-size: 20px;
`;

export const ContentDesc = styled.div`
    font-family: Philosopher;
    line-height: 16px;
    color: wheat;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    margin-top: 10px;
`;

export const ContentLine = styled.span`
    display: block;

    margin: 40px 0 0 0;
    width: 100%;
    height: 1px;
    background: #22252d;
`;

export const ContentSection = styled.div`
    width: 100%;
    height: min-content;
    margin: 15px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(0,0,0, 0.2);
    border: 0.5px solid #382820;

    position: relative;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &::before {
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        top: -9px;
        left: -9px;
        background: url(${ctl}) no-repeat;
        background-position: center;
        background-size: 100%;
    }

    &::after {
        content: "";
        width: 50px;
        height: 50px;
        position: absolute;
        top: -7px;
        right: -7px;
        background: url(${ctr}) no-repeat;
        background-position: center;
        background-size: 100%;
    }
`;

export const ContentItem = styled.div`
    width: 100%;

    position: relative;
    transition: width .5s, height .5s;

    border: 1px solid rgba(206, 205, 205, 0.05);

    &:hover {
        box-shadow: inset 0 0 20px rgba(206, 205, 205, 0.1);

        span.style-1, span.style-2, span.style-5, span.style-6 {
            width: 50%;
        }

        span.style-3, span.style-4, span.style-7, span.style-8 {
            height: 50%;
        } 
    }

    &:last-child {
        margin-bottom: 20px;
    }

    span.style {
        transition: .5s;
    }

    span.style-1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 20%;
        height: ${({ size }) => `${size}px`};
        background: linear-gradient(to right, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-2 {
        position: absolute;
        top: 0;
        right: 0;
        width: 20%;
        height: ${({ size }) => `${size}px`};
        background: linear-gradient(to left, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-3 {
        position: absolute;
        top: 0;
        right: 0;
        height: 20%;
        width: ${({ size }) => `${size}px`};
        background: linear-gradient(to bottom, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-4 {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 20%;
        width: ${({ size }) => `${size}px`};
        background: linear-gradient(to top, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-5 {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20%;
        height: ${({ size }) => `${size}px`};

        background: linear-gradient(to right, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-6 {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20%;
        height: ${({ size }) => `${size}px`};

        background: linear-gradient(to left, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-7 {
        position: absolute;
        top: 0;
        left: 0;
        height: 20%;
        width: ${({ size }) => `${size}px`};
        background: linear-gradient(to bottom, rgba(206, 205, 205, 0.3), transparent);
    }

    span.style-8 {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 20%;
        width: ${({ size }) => `${size}px`};
        background: linear-gradient(to top, rgba(206, 205, 205, 0.3), transparent);
    }
`;

export const HoverEffect = styled.span`
    width: 300px;
    height: 120px;
    opacity: 1;
    margin-left: 60px;
    background-repeat: no-repeat;
    position: absolute;
    left: -120px;
    top: -45px;
    opacity: 0;
    transition: .5s;
    z-index: 10;
    pointer-events: none;
    background: url(${hover}) no-repeat;
`;

export const TableWrap = styled.div`
    width: 97%;
    margin: 20px auto;
`;

export const ShopItem = styled.div`
    width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;
    margin: 0 auto;
    padding: 15px 0;

    border-left: 1px solid rgba(206, 205, 205, 0.3);
    border-right: 1px solid rgba(206, 205, 205, 0.3);

    background: url(${iBg}) no-repeat;
    background-size: cover;

    transition: .5s;

    &::before {
        content: "";
        position: absolute;
        width: 200px;
        height: 30px;
        top: -25px;
        left: 0;

        filter: brightness(1.2);

        background: url(${pTop}) no-repeat;
        background-size: 100%;
        background-position: center;
    }

    &::after {
        content: "";
        position: absolute;
        width: 200px;
        height: 30px;
        bottom: -25px;
        left: 0;

        filter: brightness(1.2);

        background: url(${pBottom}) no-repeat;
        background-size: 100%;
        background-position: center;
    }

    &:hover {
        box-shadow: inset 0 0 20px rgba(206, 205, 205, 0.3);
    }
`;