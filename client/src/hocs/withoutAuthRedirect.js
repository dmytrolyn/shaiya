import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { getAuth } from '../services/reducers';

const withoutAuthRedirect = (Component) => {

    let ComponentWithRedirect = ({ hasAuth, ...props }) => (
        !hasAuth ? <Redirect to="/" /> : <Component {...props} />
    );

    const mapStateToProps = (state) => ({
        hasAuth: getAuth(state)
    })

    return connect(mapStateToProps, null)(ComponentWithRedirect);
}

export default withoutAuthRedirect;