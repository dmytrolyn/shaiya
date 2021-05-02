import React, { useRef, useEffect }  from 'react';
import styles from './styles/styles.module.css';
import toTop from './assets/toTop.png';
import cn from 'classnames';

const ScrollTop = () => {
    const ref = useRef();

    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const checkScroll = () => {
        if (document.documentElement.scrollTop > 20) {
            ref.current.style.display = "flex";
        } else {
            ref.current.style.display = "none";
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);

        return function cleanup() {
            window.removeEventListener('scroll', checkScroll);
        }
    })


    return (
        <div onClick={scrollToTop} ref={ref} className={cn(styles.scroll,"c-pointer")}>
            <span>Go to Top</span>
            <img src={toTop} alt="toTop" />
        </div>
    ) 
}

export default ScrollTop;