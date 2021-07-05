import React from 'react';
import { ContentSection } from '../../../Common/styled/components';
import ChangeForm from './ChangeForm';
import styles from '../../styles/styles.module.css';

const ChangePassword = (props) => {
    return (
        <ContentSection>
            <div className={styles.changeFormWrap}>
                <ChangeForm {...props}/>
            </div>
        </ContentSection>
    )
}

export default ChangePassword;