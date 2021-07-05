/* eslint-disable no-lone-blocks */
import { ClassIcon, CustomRankIcon, FactionIcon, GuildFactionIcon } from '../styled/components';
import { getTimeString } from '../../../../utils/bossTimer';

export const trKeys = {
    index: "№", CharName: "Name", Family: "Faction", Job: "Class", GuildName: "Guild", MasterName: "Creator", 
    K1: "Kills", K2: "Deaths", CreateDate: "Created at", GuildPoint: "Scores", TotalCount: "Members",
    Country: "faction", MobName: "Boss", TimeLeft: "Time left", MapID: "Map", DeleteDate: "Deleted at", JoinDate: "Created at",
    ItemName: "Item"
};

const createGMTDate = (date) => {
    date = new Date(date).toGMTString();
    date = date.split(' ').slice(0, 5).join(' ');
    return date;
}

const trValue = (key, val, size) => {
    switch(key) {
        case "Family": {
            return FactionIcon(val, size);
        };
        case "Country": {
            return GuildFactionIcon(val, size);
        };
        case "Job": {
            return ClassIcon(val);
        };
        case "Rank": {
            return <CustomRankIcon index={val} />;
        };
        case "CreateDate": {
            return createGMTDate(val);
        };
        case "JoinDate": {
            return createGMTDate(val);
        };
        case "Date": {
            return createGMTDate(val);
        }
        case "Time": {
            return createGMTDate(val);
        };
        case "DeleteDate": {
            return createGMTDate(val);
        }
        case "TimeLeft": {
            return getTimeString(val);
        }
        default: return val;
    }
}

export const transformValues = (item, size) =>
    Object.keys(item).map(key => {
        return trValue(key, item[key], size);
    });