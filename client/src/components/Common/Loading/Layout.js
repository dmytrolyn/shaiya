import React from 'react';
import { LoadingLayout } from '../LoadingLayout/styled/components';
import Loading from './Loading';

export const Layout = ({ show }) => { 
    return (
        <LoadingLayout show={show}>
            <Loading />
        </LoadingLayout>
    )
}