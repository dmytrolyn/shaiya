const getBossRespawnQuery = `SELECT TOP 1 DATEDIFF(S, GETDATE(), DATEADD(HOUR, Respawn, ActionTime)) AS TimeLeft, MobName, Respawn, CharName AS Killer, MapID FROM WebResource.dbo.BossDeathLog WHERE MobID = @id ORDER BY RowID DESC`;
const getTop10Killers = `SELECT TOP(10) A.CharName, A.Family, COUNT(B.ActionTime) as Kills FROM PS_GameData.dbo.Chars A
FULL OUTER JOIN PS_UserData.dbo.Users_Master C on A.UserUID = C.UserUID
FULL OUTER JOIN PS_GameLog.dbo.Kills B on A.CharID = B.KillerID
WHERE ActionTime IS NOT NULL and CharName IS NOT NULL and C.Status != 16 and DATEDIFF(day, B.ActionTime, GETDATE()) < 7
GROUP BY A.CharName, A.Family
ORDER BY Kills DESC`;
const getTop10Guilds = `SELECT TOP 10 GuildName, Country, GuildPoint FROM PS_GameData.dbo.Guilds WHERE del=0 ORDER BY GuildPoint DESC`;
const getOnlineQuery = "SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars WHERE LoginStatus = 1";
const getAoLCharsQuery = `SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.UserMaxGrow A
FULL OUTER JOIN PS_UserData.dbo.Users_Master B ON (A.Country = 0 AND DATEDIFF(day, B.LeaveDate, GETDATE()) < 7)
WHERE A.UserUID = B.UserUID`;
const allPlayersQuery = `SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars`;
const allGuildsQuery = `SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Guilds`;
const getUoFCharsQuery = `SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.UserMaxGrow A
FULL OUTER JOIN PS_UserData.dbo.Users_Master B ON (A.Country = 1 AND DATEDIFF(day, B.LeaveDate, GETDATE()) < 7)
WHERE A.UserUID = B.UserUID`;


module.exports = {
    getBossRespawnQuery,
    getTop10Killers,
    getTop10Guilds,
    getOnlineQuery,
    getAoLCharsQuery,
    getUoFCharsQuery,
    allPlayersQuery,
    allGuildsQuery
}