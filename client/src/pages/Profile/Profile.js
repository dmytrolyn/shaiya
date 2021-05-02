import React from 'react';
import { ContentWrap } from '../../components/Common/styled/components';
import ProfileBlock from '../../components/Profile/Profile';

const Profile = (props) => {
    return (
        <ContentWrap>
            <ProfileBlock {...props} />
        </ContentWrap>
    )
}

export default Profile;