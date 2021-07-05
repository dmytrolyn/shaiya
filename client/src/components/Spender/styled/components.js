import styled from 'styled-components';
import descBg from '../assets/bg.png';
import frame from '../assets/frame.png';
import * as s from '../constants';
import { pointer } from '../../../utils/cPointer';
import { ContentItem } from '../../Common/styled/components';

const progressColor = {
    [s.UNLOCKED]: 'linear-gradient(to bottom, #66ff33 40%, #29a329 100%)',
    [s.PROGRESS]: 'linear-gradient(to bottom, rgba(90, 90, 255, 0.6) 20%, rgba(90, 90, 255, 0.2) 100%)',
    [s.REDEEMED]: 'linear-gradient(to bottom, #ffff66 20%, #ffcc00 60% ,#ff9900 100%)',
    [s.LOCKED]: 'transparent'
}

const messageColor = {
    [s.UNLOCKED]: '#29a329',
    [s.PROGRESS]: '#b30000',
    [s.REDEEMED]: '#ffcc00',
    [s.LOCKED]: '#b30000'
}

export const Description = styled.div`
    width: 100%;
    margin-top: 10px;

    font-family: Philosopher;
    font-weight: 400;
    text-align: left;

    background: url(${descBg});
    background-position: center;
    background-size: 100%;

    p {
        font-size: 14px;
        line-height: 24px;
        
        color: rgb(197, 183, 183);
    }

    span {
        color: rgb(197, 183, 183);
    }
`;

export const Sequence = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const SequenceStep = styled.div`
    width: 60px;
    height: 60px;

    background: url(${frame});
    background-repeat: no-repeat;
    background-size: cover;

    font-size: 22px;
    font-weight: 700;
    color: rgb(197, 183, 183);

    display: flex;
    align-items: center;
    justify-content: center;

    &~ span {
        margin: 0 10px;
    }
`;

export const SequenceLevel = styled.div`
    width: 75%;
    margin: 10px auto;
    position: relative;
    font-size: 16px;

    display: flex;
    align-items: center;

    /* &:nth-child(even) {
        padding-left: 150px;
    }

    &:nth-child(odd) {
        padding-right: 30px;
    } */
`;

export const SpenderTabs = styled.div `
    display: flex;
    flex-flow: row wrap;

    width: 100%;
    border-top: 1px solid #382820;
    border-bottom: 1px solid #382820;
`;

export const SpenderTab = styled.div `
    padding: 10px 20px;

    font-family: OpenSans;
    font-weight: 400;
    font-size: 14px;
        
    color: #cc7954;

    ${props => props.active && `
        color: #0a0c15;
        background: #d69276;
    `}

    transition: .5s;
`;

export const Progress = styled.div`
    width: 100%;

    display: flex;
`;

export const ProgressLevel = styled.div`
    width: 100%;
    text-align: right;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 20px;

    border: 1px solid #382820;
`;

export const ProgressBarValue = styled.div`
    width: ${({ progress }) => progress < 100 ? `${progress}%` : "100%"};
    height: 100%;

    background: ${({ status }) => progressColor[status]};
`;

export const ProgressLevelValue = styled.div`
    color: #cc7954;
    font-size: 16px;
    padding-top: 5px;
`;

export const TierColor = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #382820;

    margin: 0 10px;

    background: ${({ status }) => progressColor[status]};
`;

export const RewardTab = styled.div`
    border: 1px solid #382820;
    padding: 12px;

    margin: 10px 0;

    font-family: OpenSans;
    font-weight: 400;
    font-size: 14px;

    color: #d69276;

    cursor: ${pointer};
    transition: .5s;

    ${({ active }) => active && `
        background: #d69276;
        color: #0a0c15;
    `}

    &:hover {
        background-color: ${({ active }) => !active && 'rgba(255,255,255, 0.05)'};
    }
`;

export const LevelMessage = styled.div`
    text-align: center;

    color: ${({ status }) => messageColor[status]};
    font-family: Philosopher;
    font-size: 18px;

    padding: 15px;
`;

export const RewardItem = styled(ContentItem)`
    height: 100px;
    margin: 5px 0;

    display: flex;
    align-items: center;
`;