const guildsQuery = "SELECT GuildName, MasterName, CreateDate, Country, TotalCount, GuildPoint from PS_GameData.dbo.Guilds where del=0 order by GuildPoint desc";
const getGuildsCount = "SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Guilds";

module.exports = {
    guildsQuery,
    getGuildsCount
}