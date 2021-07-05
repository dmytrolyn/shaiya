import styled from 'styled-components';
import buttonBlue from '../assets/buttonBlue.png';
import { pointer } from '../../../../utils/cPointer';
import btnBg from '../assets/btnBg.png';
import btnClose from '../assets/btnClose.png';

const Button = styled.button`
    width: 151px;
    height: 42px;
    border: none;
    outline: none;
    cursor: ${pointer};
    transition: filter 0.3s ease-in-out;

    position: relative;

    span {
        box-shadow: 0 2px 1px 0 rgb(0 0 0 / 20%);
        font-family: Philosopher;
        font-size: 12px;
        line-height: 1.2;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: .2em;
        color: #fff;
    }

    ${props => !props.disabled ? `
        &:hover {
            filter: brightness(150%);
        }
    ` : `
        cursor: not-allowed;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;

            background: rgba(0,0,0, 0.4);
        }
    `}
`;

export const BlueButton = styled(Button)`
    background: url(${buttonBlue}) no-repeat;
`;

export const GreenButton = styled.button`
    color: #fff;
    width: 151px;
    height: 44px;
    background: url(${btnBg}) no-repeat;
    border: none;
    outline: none;
    cursor: ${pointer};
    transition: .5s;

    font-family: Philosopher;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: .2em;
    color: #fff;

    :hover {
        filter: brightness(150%);
    }
`;

export const CloseButton = styled.div`
    position: absolute;
    ${({ offset }) => offset ? `
        top: ${offset.top}px;
        right: ${offset.right}px;
    ` : `
        top: -50px;
        right: -50px;
    `}

    transition: .5s;
    z-index: 20;
    width: 105px;
    height: 97px;
    cursor: ${pointer};
    outline: none;
    background: url(${btnClose}) no-repeat;

    :hover {
        filter: brightness(150%);
    }
`;

export const ActionButton = styled.button`
    height: 30px;
    padding: 5px 20px;

    display: inline-flex;
    align-items: center;
    background: transparent;
    border: 1px solid #382820;
    color: #cc7954;
    font-family: OpenSans;
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    cursor: ${pointer};
    outline: none;
    vertical-align: middle;
    background: transparent;
    transition: .3s ease-in-out;
    position: relative;

    ${props => !props.locked && `
        background: linear-gradient(to left, transparent 50%, #cc7954 50%) right no-repeat;
        background-size: 200%;
        &:hover {
            background-position: left;
            color: #0a0c15;
        }`
    }
`;