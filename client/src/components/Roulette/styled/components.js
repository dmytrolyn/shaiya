import styled from 'styled-components';
import { pointer } from '../../../utils/cPointer';

export const Roulette = styled.div`
    width: ${props => props.width ? `${props.width}px` : '400px'};
    height: ${props => props.width ? `${props.width}px` : '400px'};

    margin: 100px 0;

    position: relative;

    transform: scale(1.2);
    font-family: Philosopher;
`;

export const RouletteItem = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    top: -200px;
    left: 200px;
    transform-origin: 0% 400px;
    border: 0 solid transparent;

    ${props => `
        transform: scale(2) rotate(${props.angle}deg);
        border-right-width: ${props.brw}px;
        border-top-width: ${props.btw}px;
        border-top-color: ${props.color};
    `}
`;

export const ItemLabel = styled.label`
    display: block;
    position: absolute;
    color: #FFF;
    font-weight: 800;
    top: 0;
    left: 0;
    white-space: nowrap;
    transform-origin: 0 0;
    font-size: 0.8em;

    ${props => `
        transform: translateY(${props.ty}px) translateX(${props.tx}px) rotateZ(${90 + props.rz}deg);
        height: ${props.tx}px;
        line-height: ${props.tx}px;
        text-indent: ${props.r}px;
    `}

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        font-size: 0.7em;
        text-indent: 0;
    }
`;

export const Spinner = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 1px solid #cc7954;
    overflow: hidden;
    transform: rotateZ(0deg);
    backface-visibility: hidden;
    font-size: 12px;
`;

export const SpinButton = styled.button`
    width: 10em;
    height: 10em;
    line-height: 10em;
    top: 50%;
    left: 50%;
    margin-left: -5em;
    margin-top: -5em;
    font-weight: 800;
    z-index: 998;
    position: absolute;
    background: #FFF;
    border: none;
    border-radius: 100%;
    color: #999;
    outline: none;
    cursor: ${pointer};
    user-select: none;
    box-shadow: 0 0.4em 0 rgba(0, 0, 0, 0.25);
    text-align: center;
    transition: transform 0.15s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: scale(0.7);

    &:hover {
        span {
            color: black;
        }
    }

    ${props => props.disabled && `
        color: black;
    `};

    span {
        transition: .3s;
        font-size: 1.6em;
        letter-spacing: -0.05em;
    }

    ${props => props.busy && `
        transform: scale(0.8);
        box-shadow: 0 0.15em 0 rgba(0, 0, 0, 0.25);
        color: #999;
        cursor: default;
    `}
`;

export const Markers = styled.div`
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    overflow: hidden;
    border-radius: 100%;
`;

export const Triangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1em 0 1em 1em;
    border-color: transparent transparent transparent #007bff;
    position: absolute;
    border-left-color: #FFF;
    top: 50%;
    left: -1px;
    margin-top: -1em;
    filter: drop-shadow(0 0.25em 0 rgba(0, 0, 0, 0.25));
`;