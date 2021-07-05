import { useState, useEffect } from 'react';
import * as Styled from './styled/components';
import styles from './styles/styles.module.css';

const VelocityComponent = require('velocity-react').VelocityComponent;

let colors = ['#3f297e', '#1d61ac', '#169ed8', '#209b6c', '#60b236', '#efe61f', '#f7a416', '#e6471d', '#dc0936', '#e5177b', '#be107f', '#881f7e', '#330066', '#26004d'];

// from 10 to 14

const Roulette = ({ items, loading, config, spin }) => {
    let { index, dir } = config;
    const [state, setState] = useState({ busy: false });
    const [current, setIndex] = useState(null);

    let radius = 200;
    let diameter = radius * 2;
    let count = items.length;
    let delta = 360 / count;
    let angleOffset = 240 - (delta - 360 / 12);

    let borderTopWidth = diameter;
    let deltaInRadians = delta * Math.PI / 180;
    let borderRightWidth = diameter / ( 1 / Math.tan(deltaInRadians) );

    let textHeight = parseInt(((2 * Math.PI * radius) / count) * 0.5);
    let k = count / 14;

    const createItem = (item, index) => {
        let ang = delta * (count - index) + angleOffset - delta * 0.5;
        let iconPath = `${process.env.REACT_APP_STATIC_ICONS}/${item.Icon}`;

        return <Styled.RouletteItem key={index} btw={borderTopWidth} brw={borderRightWidth} angle={ang} color={colors[index] || 'black'}>
            <Styled.ItemLabel ty={diameter * -0.25 * k} tx={textHeight * 1.03 * k} rz={delta * 0.5} r={radius * 0.1 * k / (15 - count)}>
                <span className={styles.span}>
                    <img className={styles.img} src={iconPath} alt="img"/>
                </span><span className={styles.text}>x{item.Count}</span>
            </Styled.ItemLabel>
        </Styled.RouletteItem>
    }

    const setAngle = () => current * delta + (dir ? 1440 : -1440);
    useEffect(() => {
        setIndex(index);
    }, [index])

    useEffect(() => {
        setState({ busy: loading })
    }, [loading])

    return (
        <Styled.Roulette width={diameter}>
            <VelocityComponent runOnMount={true} interruptBehavior="finish" animation={{ rotateZ: setAngle() +'deg' }} duration={3000} easing="easeOutQuint">
                <Styled.Spinner>
                    {items.map((item, index) => createItem(item, index))}
                </Styled.Spinner>
            </VelocityComponent>
            <Styled.Markers>
                <Styled.Triangle />
            </Styled.Markers>
            <Styled.SpinButton busy={state.busy} disabled={state.busy} onClick={spin}>
                <span>SPIN</span>
            </Styled.SpinButton>
        </Styled.Roulette>
    )
}

export default Roulette;