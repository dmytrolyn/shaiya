import React from 'react';
import styles from './styles/styles.module.css';
import { ErrorPageTitle } from '../Common/styled/components';
import image from './assets/b3.png'

export default class PageErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {

    }
    
    render() {
        if (this.state.hasError) {
            return <div className={styles.wrap}>
                <div className={styles.textWrap}>
                    <ErrorPageTitle>Something went wrong...</ErrorPageTitle>
                    <p className={styles.desc}>Please, reload the page</p>
                </div>
                <div>
                    <img src={image} alt="err" className={styles.img} />
                </div>
            </div>
        }
    
        return this.props.children; 
    }
}