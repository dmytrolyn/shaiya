import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { manageAuthModal, logoutThunk } from '../../services/actions';
import { getUser, getAuth } from '../../services/reducers';

const NavBarContainer = ({ logoutThunk, ...props}) => {
    const handleLogout = () => {
        document.cookie = "token=";
        logoutThunk();
    }

    return (
        <NavBar logout={handleLogout} {...props} />
    )
}

const mapStateToProps = (state) => ({
    user: getUser(state),
    hasAuth: getAuth(state)
})

export default connect(mapStateToProps, { manageAuthModal, logoutThunk })(NavBarContainer);