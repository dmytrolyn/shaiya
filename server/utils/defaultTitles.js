const defaultTitles = {
    ranks: ['CharName', 'Family', 'Job', 'Level', 'GuildName', 'K1', 'K2', 'Rank'],
    guilds: ['GuildName', 'MasterName', 'CreateDate', 'Country', 'TotalCount', 'GuildPoint'],
    kills: ['Killer', 'Family', 'Victim', 'Time', 'Map'],
    topKillers: ['CharName', 'Family', 'Kills'],
    topGuilds: ['GuildName', 'Country', 'GuildPoint'],
    bosses: ['MobName', 'Killer', 'MapID', 'Respawn', 'TimeLeft'],
    bosses2: ['MobName', 'Killer', 'TimeLeft'],
    rewards: ['Rank', 'Points', 'Item'],
    deletedChars: ['CharName', 'Family', 'Job', 'Level', 'DeleteDate'],
    activeChars: ['CharName', 'Family', 'Job', 'Level', 'JoinDate']
}

module.exports = defaultTitles;