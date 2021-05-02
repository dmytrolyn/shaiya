import styled from 'styled-components';
import head from '../assets/head.png';
import grade from '../icons/grades.png';
import fw from '../icons/icn-1.png';
import dg from '../icons/icn-3.png';
import ah from '../icons/icn-6.png';
import ra from '../icons/icn-4.png';
import mp from '../icons/icn-5.png';
import po from '../icons/icn-2.png';
import dark from '../icons/uof.png';
import light from '../icons/aol.png';

const changeColor = (n) => {
    switch(n) {
        case "Name": return "#fff";
        case "Faction": return "#4990df";
        case "K1": return "#a97fff";
        default: return "#ffdda9";
    }
}

const setHeight = (h) => {
    switch(h) {
        case "SMALL": return "36px";
        default: return "50px";
    }
}

const setThBg = (s) => {
    switch(s) {
        case "SMALL": return `url(${head})`;
        default: return 'rgba(0,0,0,0.5)';
    }
}

export const Table = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: collapse;

    font-family: OpenSans;
    font-weight: 500;
    line-height: 20px;

    background: rgba(255,255,255, 0.01);
`;

export const TableHead = styled.thead`
    width: 100%;
    background: ${props => setThBg(props.size)};
    background-size: cover;
`;

export const TableRow = styled.tr`
    width: 100%;
    height: ${props => setHeight(props.size)};
    line-height: ${props => setHeight(props.size)};
    transition: .5s;
    position: relative;
    z-index: 20;

    &:nth-child(2n) {
        background: rgba(0, 0, 0, .2);
    }
`

export const TD = styled.td`
    font-size: 14px;
    color: ${props => changeColor(props.name)};
    z-index: 30;
    padding: 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
`;

export const TH = styled.th`
    font-size: 12px;
    text-transform: uppercase;
    color: #696868;
`;

export const Icon = styled.img`
    display: block;
    margin: auto;
`;

export const SmallIcon = styled(Icon)`
    width: 30px;
    height: 30px;
`;

export const BigIcon = styled(Icon)`
    width: 40px;
    height: 40px;
`;

export const MediumIcon = styled(Icon)`
    width: 35px;
    height: 35px;
`;

export const RankIcon = styled.div`
    background-image: url(${grade});
    background-repeat: no-repeat;
    width: 27px;
    height: 16px;
    margin: auto;
`;

const ranks = {
    1: "0 0", 2: "0 -32px", 3: "0 -64px", 4: "0 -96px", 5: "0 -128px", 6: "0 -160px", 7: "0 -192px", 8: "0 -224px", 9: "0 -256px", 10: "0 -288px",
    11: "0 -320px", 12: "0 -352px", 13: "0 -384px", 14: "0 -416px", 15: "0 -448px", 16: "0 -480px", 17: "-32px 0px", 18: "-32px -32px", 19: "-32px -64px",
    20: "-32px -96px", 21: "-32px -128px", 22: "-32px -160px", 23: "-32px -192px", 24: "-32px -224px", 25: "-32px -256px", 26: "-32px -288px", 27: "-32px -320px", 28: "-32px -352px",
    29: "-32px -384px", 30: "-32px -416px", 31: "-32px -448px", 0: "500px 500px"
}

const classes = {
    0: fw, 1: dg, 2: ra, 3: ah, 4: mp, 5: po
}

const factions = {
    0: light, 1: light, 2: dark, 3: dark
}

const guildFactions  = {
    0: light, 1: dark
}

export const CustomRankIcon = styled(RankIcon)`
    background-position: ${props => ranks[props.index]};
`;

export const ClassIcon = (index) => <MediumIcon src={classes[index]} alt="icon" />;

export const FactionIcon = (f, size) => size === "SMALL" ? <SmallIcon src={factions[f]} alt="icon" /> : <BigIcon src={factions[f]} alt="icon" />;

export const GuildFactionIcon = (f, size) => size === "SMALL" ? <SmallIcon src={guildFactions[f]} alt="icon" /> : <BigIcon src={guildFactions[f]} alt="icon" />;