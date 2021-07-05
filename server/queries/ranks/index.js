const ranksQuery = "SELECT CharName, Family, Job, Level, GuildName, K1, K2 FROM PS_GameData.dbo.Chars A FULL OUTER JOIN PS_GameData.dbo.GuildChars B on A.CharID = B.CharID and B.Del != 1 FULL OUTER JOIN PS_GameData.dbo.Guilds C on B.GuildID = C.GuildID where CharName is not null AND K1 > 0 order by K1 desc, Level desc";
const getPlayersCount = "SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars";

module.exports = {
    ranksQuery,
    getPlayersCount
}