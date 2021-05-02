import styled from 'styled-components';
import point from './assets/point.png';
import hover from './assets/hover.png';
import bg from './assets/content-bg.png';

export const Title = styled.h2`
    font-size: 30px;
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
        background-size: cover;
    }
`;

export const ContentTitle = styled(Title)`
    margin: 10px auto 0 50px;
`;

export const FormTitle = styled(Title)`
    font-size: ${props => props.size ? `${props.size}px` : "26px"};
    line-height: 26px;
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

export const ContentSingleTitle = styled(Title)`
    font-size: 28px;
    margin: 20px 0 5px 0;
    text-align: center;
`;

export const BlockSingleTitle = styled(ContentSingleTitle)`
    font-size: 24px;
`;

export const ContentSingleDesc = styled.span`
    text-align: center;
    font-family: Philosopher;
    font-size: 16px;
    font-weight: 400;
    color: rgb(197, 183, 183);
    margin: 5px 0;
`;

export const ContentDesc = styled.div`
    font-family: Philosopher;
    line-height: 16px;
    color: wheat;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    margin-top: 5px;
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
    margin: 15px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(0,0,0, 0.2);
    border: 0.5px solid #382820;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
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