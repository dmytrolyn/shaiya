import styled from 'styled-components';
import blockBg from '../assets/blockBg.png';
import refBg1 from '../assets/refBg1.png';
import refBg2 from '../assets/refBg2.png';
import refBg3 from '../assets/refBg3.png';
import refInfoBg from '../assets/refInfoBg.png';
import { pointer } from '../../../utils/cPointer';

export const RatesBlock = styled.div`
    width: calc(100% - 70px);
    height: calc(100% - 25px);
    background: url(${blockBg}) no-repeat;
    padding: 15px 35px 10px;

    display: flex;
    flex-direction: column;

    overflow: hidden;
`;

const RefBlock = styled.a`
    width: calc(100% - 38px);
    height: 112px;
    display: flex;
    align-items: center;
    padding-left: 38px;
    transition: .5s;
    cursor: ${pointer};

    &:hover {
        filter: brightness(150%);
    }
`;

export const RefBlockRed = styled(RefBlock)`
    background: url(${refBg1}) no-repeat;
`;

export const RefBlockPurple = styled(RefBlock)`
    background: url(${refBg2}) no-repeat;
`;

export const RefBlockBlue = styled(RefBlock)`
    background: url(${refBg3}) no-repeat;
`;

export const RefInfoBlock = styled.div`
    height: 187px;
    width: 100%;
    box-shadow: 0 12px 43px 0 rgb(0 0 0 / 33%);
    background: url(${refInfoBg}) no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;