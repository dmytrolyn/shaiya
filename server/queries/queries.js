const getKillLogs = `SELECT TOP(200) A.CharName, A.Family, 
(SELECT CharName FROM PS_GameData.dbo.Chars WHERE CharID = B.VictimID) as Victim,
B.ActionTime as Time, B.MapID FROM PS_GameData.dbo.Chars A
FULL OUTER JOIN PS_UserData.dbo.Users_Master C on A.UserUID = C.UserUID
FULL OUTER JOIN PS_GameLog.dbo.Kills B on A.CharID = B.KillerID
WHERE ActionTime IS NOT NULL and CharName IS NOT NULL and C.Status != 16
ORDER BY B.RowID DESC`;
const getTop10Killers = `SELECT TOP(10) A.CharName, A.Family, COUNT(B.ActionTime) as Kills FROM PS_GameData.dbo.Chars A
FULL OUTER JOIN PS_UserData.dbo.Users_Master C on A.UserUID = C.UserUID
FULL OUTER JOIN PS_GameLog.dbo.Kills B on A.CharID = B.KillerID
WHERE ActionTime IS NOT NULL and CharName IS NOT NULL and C.Status != 16 and DATEDIFF(day, B.ActionTime, GETDATE()) < 7
GROUP BY A.CharName, A.Family
ORDER BY Kills DESC`;
const getTop10Guilds = `SELECT TOP 10 GuildName, Country, GuildPoint FROM PS_GameData.dbo.Guilds WHERE del=0 ORDER BY GuildPoint DESC`;
const ranksQuery = "SELECT CharName, Family, Job, Level, GuildName, K1, K2 FROM PS_GameData.dbo.Chars A FULL OUTER JOIN PS_GameData.dbo.GuildChars B on A.CharID = B.CharID and B.Del != 1 FULL OUTER JOIN PS_GameData.dbo.Guilds C on B.GuildID = C.GuildID where CharName is not null order by K1 desc, Level desc";
const guildsQuery = "SELECT GuildName, MasterName, CreateDate, Country, TotalCount, GuildPoint from PS_GameData.dbo.Guilds where del=0 order by GuildPoint desc";
const onlineQuery = 'SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars WHERE LoginStatus = 1';
const allPlayersQuery = `SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars`;
const allGuildsQuery = `SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Guilds`;
const getBossRespawnQuery = `SELECT TOP 1 DATEDIFF(S, GETDATE(), DATEADD(HOUR, Respawn, ActionTime)) AS TimeLeft, MobName, Respawn, CharName AS Killer, MapID FROM WebResource.dbo.BossDeathLog WHERE MobID = @id ORDER BY RowID DESC`;
const getOnlineQuery = "SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars WHERE LoginStatus = 1";
const getPlayersCount = "SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Chars";
const getGuildsCount = "SELECT TOP 1 COUNT(*) AS Count FROM PS_GameData.dbo.Guilds";
const loginQuery = "SELECT COUNT(*) AS Count FROM PS_UserData.dbo.Users_Master WHERE UserID = @login AND Pw = @password";
const userDataQuery = "SELECT * FROM PS_UserData.dbo.Users_Master WHERE UserID = @login AND Pw = @password";
const userDataUnprotectedQuery = "SELECT * FROM PS_UserData.dbo.Users_Master WHERE UserID = @login";
const userMaxKillsQuery = "SELECT K1 FROM PS_GameData.dbo.Chars WHERE UserUID = @uid";
const checkUserQuery = "SELECT COUNT(*) AS Count FROM PS_UserData.dbo.Users_Master WHERE UserID = @login";
const registerQuery = "INSERT INTO PS_UserData.dbo.Users_Master (UserID, Pw, JoinDate, Status, Leave, UserIp, Point, Gifts) VALUES (@login, @password, GETDATE(), 0, 0, @ip, 0, 0)";
const getPasswordQuery = "SELECT Pw FROM PS_UserData.dbo.Users_Master WHERE UserID = @login";
const changePasswordQuery = "UPDATE PS_UserData.dbo.Users_Master SET Pw = @password WHERE UserID = @login";
const createChangePassLogQuery = "INSERT INTO WebResource.dbo.PwChangeLog (UserUID, OldPw, NewPw, Date) VALUES (@login, @oldpass, @newpass, GETDATE())";
const checkUserDeletedCharacter = "SELECT COUNT(*) as Count FROM PS_GameData.dbo.Chars WHERE UserUID = @uid and CharID = @id and Del = 1";
const checkUserActiveCharacter = "SELECT COUNT(*) as Count FROM PS_GameData.dbo.Chars WHERE UserUID = @uid and CharID = @id and Del = 0";
const changeUserPoints = "UPDATE PS_UserData.dbo.Users_Master SET Point=Point-@diff WHERE UserUID = @uid";
const checkCharacterDataQuery = "SELECT um.UserID, umg.Country, c.Family, c.Del FROM PS_UserData.dbo.Users_Master AS um INNER JOIN PS_GameData.dbo.UserMaxGrow AS umg ON umg.UserUID = um.UserUID INNER JOIN PS_GameData.dbo.Chars AS c ON c.UserUID = um.UserUID WHERE c.CharID = @id";
const checkUserSlots = "SELECT Slot FROM PS_GameData.dbo.Chars WHERE UserUID = @uid and Del = 0";
const resurrectQuery = "UPDATE PS_GameData.dbo.Chars SET DeleteDate = NULL, Del = 0, Map = 42, PosX = 47 , PosY = 2, PosZ = 52, Slot = @slot WHERE CharID = @id";
const pvpRewardsQuery = "SELECT Rank, Points, Item, Count FROM WebResource.dbo.PvPReward";
const personalPvpRewardsQuery = "SELECT Rank FROM WebResource.dbo.PvPRewardLog WHERE UserUID = @uid";
const getPersonalRewardQuery = "INSERT INTO WebResource.dbo.PvPRewardLog (UserUID, Rank, ReceivedDate) VALUES (@uid, @rank, GETDATE())";
const deletedCharsQuery = "SELECT CharName, Family, Job, Level, DeleteDate, CharID, JoinDate FROM PS_GameData.dbo.Chars WHERE UserUID = @uid AND Del = 1";
const activeCharsQuery = "SELECT CharName, Family, Job, Level, JoinDate, CharID FROM PS_GameData.dbo.Chars WHERE UserUID = @uid AND Del = 0";
const getItemName = "SELECT ItemName FROM PS_GameDefs.dbo.Items WHERE ItemID = @id";
const deleteCharQuery = "UPDATE PS_GameData.dbo.Chars SET DeleteDate = GETDATE(), Del = 1 WHERE CharID = @id";
const getNewsQuery = "SELECT * FROM WebResource.dbo.News WHERE Del != 1";

module.exports = {
    getTop10Killers,
    getKillLogs,
    getTop10Guilds,
    ranksQuery,
    guildsQuery,
    onlineQuery,
    allPlayersQuery,
    allGuildsQuery,
    getBossRespawnQuery,
    getOnlineQuery,
    getPlayersCount,
    getGuildsCount,
    loginQuery,
    userDataQuery,
    userDataUnprotectedQuery,
    userMaxKillsQuery,
    checkUserQuery,
    checkUserQuery,
    registerQuery,
    getPasswordQuery,
    changePasswordQuery,
    createChangePassLogQuery,
    checkUserDeletedCharacter,
    checkUserActiveCharacter,
    changeUserPoints,
    checkCharacterDataQuery,
    checkUserSlots,
    resurrectQuery,
    pvpRewardsQuery,
    personalPvpRewardsQuery,
    getPersonalRewardQuery,
    deletedCharsQuery,
    activeCharsQuery,
    getItemName,
    deleteCharQuery,
    getNewsQuery
}
