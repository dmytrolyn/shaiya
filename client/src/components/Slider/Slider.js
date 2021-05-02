import React, { useState } from 'react';
import { SliderComponent, ArrowsPad } from './styled/components';
import styles from './styles/styles.module.css';
import slide from './images/slide.png';

const Slider = () => {
    const [state, setState] = useState(1);

    const settings = {
        arrows: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        afterChange: (current) => {
            setState(++current)
        } 
    }

    return (
        <div className={styles.sliderWrap}>
            <SliderComponent {...settings} className={styles.slider}>
                <div>
                    <img src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <h1 className={styles.sliderTitle}>
                            Episode 4.5
                        </h1>
                        <p className={styles.sliderDesc}>With custom features</p>
                    </div>
                </div>
                <div>
                    <img src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <h1 className={styles.sliderTitle}>
                            PvP/PvE
                        </h1>
                        <p className={styles.sliderDesc}>Server type</p>
                    </div>
                </div>
                <div>
                    <img src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <h1 className={styles.sliderTitle}>
                            Kills rate x5!
                        </h1>
                        <p className={styles.sliderDesc}>x10 on events</p>
                    </div>
                </div>
                <div>
                    <img src={slide} alt="slide" />
                    <div className={styles.sliderInfo}>
                        <h1 className={styles.sliderTitle}>
                            Exp rate x100!
                        </h1>
                        <p className={styles.sliderDesc}>x150 on weekend</p>
                    </div>
                </div>
            </SliderComponent>
            <ArrowsPad><span className={styles.pageCurrent}>{state}</span>/<span>4</span></ArrowsPad>
        </div>
    )
}

export default Slider;