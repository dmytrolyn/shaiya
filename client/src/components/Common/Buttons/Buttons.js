import React from 'react';
import { BlueButton, GreenButton, ActionButton } from './styled/components';
import AsyncLoading from '../Loading/AsyncLoading';
import { SuccessIcon, LockIcon } from '../Icons/Icons';
import { Link } from 'react-router-dom';

export const ButtonBlue = ({ text, ...props}) => {
    return (
        <BlueButton {...props}><span>{text}</span></BlueButton>
    )
}

export const ButtonGreen = ({ text, ...props}) => {
    return (
        <GreenButton {...props}><span>{text}</span></GreenButton>
    )
}

export const ButtonBlueLink = ({ text, page, ...props }) => { 
    return (
        <Link to={page}>
            <BlueButton {...props}><span>{text}</span></BlueButton>
        </Link>
    )
}

export const AsyncButton = ({ text, isLoading, error, status, locked, request, ...props}) => {
    return (
        !locked ? !status ? isLoading ? <AsyncLoading /> : <ActionButton {...props} onClick={request}>{text}</ActionButton>: <SuccessIcon /> : <ActionButton locked={true}><LockIcon /> Locked</ActionButton>
    )
}