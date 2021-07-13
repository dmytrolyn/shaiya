import React from 'react';
import { ContentSection } from '../../../Common/styled/components';
import PromotionForm from './PromotionForm';
import styles from '../../styles/styles.module.css';

const Promotion = (props) => {
    return (
        <ContentSection>
            <div className={styles.changeFormWrap}>
                <PromotionForm {...props}/>
            </div>
        </ContentSection>
    )
}

export default Promotion;