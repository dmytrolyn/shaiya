import React from 'react';
import { LoadingLayout } from './styled/components';
import Loading from './Loading';

export const Layout = ({ show, withLoading = true, cn }) => { 
    return (
        <LoadingLayout show={show}>
            <Loading className={cn} show={withLoading} />
        </LoadingLayout>
    )
}