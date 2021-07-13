const checkUserDeletedCharacter = "SELECT COUNT(*) as Count FROM PS_GameData.dbo.Chars WHERE UserUID = @uid and CharID = @id and Del = 1";
const checkUserActiveCharacter = "SELECT COUNT(*) as Count FROM PS_GameData.dbo.Chars WHERE UserUID = @uid and CharID = @id and Del = 0";
const getCharNameById = `SELECT CharName FROM PS_GameData.dbo.Chars WHERE CharID = @id`;
const checkCharacterDataQuery = "SELECT um.UserID, umg.Country, c.Family, c.Del FROM PS_UserData.dbo.Users_Master AS um INNER JOIN PS_GameData.dbo.UserMaxGrow AS umg ON umg.UserUID = um.UserUID INNER JOIN PS_GameData.dbo.Chars AS c ON c.UserUID = um.UserUID WHERE c.CharID = @id";
const getCharById = "SELECT * FROM PS_GameData.dbo.Chars WHERE CharID = @id";
const checkUserSlots = "SELECT Slot FROM PS_GameData.dbo.Chars WHERE UserUID = @uid and Del = 0";
const resurrectQuery = "UPDATE PS_GameData.dbo.Chars SET DeleteDate = NULL, Del = 0, Map = 42, PosX = 47 , PosY = 2, PosZ = 52, Slot = @slot WHERE CharID = @id";
const deleteCharQuery = "UPDATE PS_GameData.dbo.Chars SET DeleteDate = GETDATE(), Del = 1 WHERE CharID = @id";
const deletedCharsQuery = "SELECT CharName, Family, Job, Level, DeleteDate, CharID, JoinDate FROM PS_GameData.dbo.Chars WHERE UserUID = @uid AND Del = 1";
const activeCharsQuery = "SELECT CharName, Family, Job, Level, JoinDate, CharID FROM PS_GameData.dbo.Chars WHERE UserUID = @uid AND Del = 0";
const userMaxKillsQuery = "SELECT K1 FROM PS_GameData.dbo.Chars WHERE UserUID = @uid";
const pvpRewardQuery = "SELECT Item, Count FROM WebResource.dbo.PvPReward WHERE Rank = @rank";
const addPersonalRewardLogQuery = "INSERT INTO WebResource.dbo.PvPRewardLog (UserUID, Rank, ReceivedDate) VALUES (@uid, @rank, GETDATE())";
const pvpRewardsQuery = `SELECT A.Rank, A.Points, A.Count, B.ItemName FROM WebResource.dbo.PvPReward A
FULL OUTER JOIN PS_GameDefs.dbo.Items B ON A.Item = B.ItemID
WHERE A.Item IS NOT NULL ORDER BY Rank`;
const personalPvpRewardsQuery = "SELECT Rank FROM WebResource.dbo.PvPRewardLog WHERE UserUID = @uid";
const getSpendersQuery = "SELECT * FROM WebResource.dbo.TieredSpender WHERE Del != 1";
const getSpenderItems = `SELECT A.RowID, A.TieredSpenderLevel, A.Count, A.Img, A.Text, B.ItemName FROM WebResource.dbo.TieredSpenderItems A
FULL OUTER JOIN PS_GameDefs.dbo.Items B ON A.ItemID = B.ItemID
WHERE TieredSpenderID = @id`;
const getSpenderItem = "SELECT ItemID, Count FROM WebResource.dbo.TieredSpenderItems WHERE RowID = @id";
const getSpenderRewards = "SELECT TieredSpenderLevel FROM WebResource.dbo.TieredSpenderLogs WHERE TieredSpenderID = @id AND UserUID = @uid";
const getSpenderStatus = "SELECT Exp FROM WebResource.dbo.TieredSpenderStatus WHERE TieredSpenderID = @id AND UserUID = @uid";
const updateSpenderStatus = "UPDATE WebResource.dbo.TieredSpenderStatus SET Exp = Exp + @exp WHERE TieredSpenderID = @id AND UserUID = @uid";
const insertSpenderStatus = "INSERT INTO WebResource.dbo.TieredSpenderStatus (TieredSpenderID, UserUID, Exp) VALUES (@id, @uid, @exp)";
const addSpenderRewardLog = "INSERT INTO WebResource.dbo.TieredSpenderLogs (TieredSpenderID, TieredSpenderLevel, UserUID, Date, ItemRowID) VALUES (@id, @level, @uid, GETDATE(), @row)";
const clearUserSpenderLogs = "DELETE FROM WebResource.dbo.TieredSpenderLogs WHERE UserUID = @uid AND TieredSpenderID = @id";
const clearUserSpenderProgress = "UPDATE WebResource.dbo.TieredSpenderStatus SET Exp = 0 WHERE UserUID = @uid AND TieredSpenderID = @id";
const getRouletteItems = `SELECT A.RowID, A.ItemID, A.Count, A.Rate, A.Icon, B.ItemName FROM WebResource.dbo.Roulette A
FULL OUTER JOIN PS_GameDefs.dbo.Items B ON A.ItemID = B.ItemID
WHERE A.ItemID = B.ItemID
ORDER BY A.RowID`;
const addRouletteSpinLog = "INSERT INTO WebResource.dbo.RouletteLogs (UserUID, ItemRowID, Date) VALUES (@uid, @irid, GETDATE())";
const getUserRouletteRewards = `SELECT TOP 5 C.ItemName, B.Count, A.Date FROM WebResource.dbo.RouletteLogs A
FULL OUTER JOIN WebResource.dbo.Roulette B ON A.ItemRowID = B.RowID
FULL OUTER JOIN PS_GameDefs.dbo.Items C ON B.ItemID = C.ItemID
WHERE A.UserUID = @uid
ORDER BY A.Date DESC`;
const getPromoByCode = "SELECT * FROM WebResource.dbo.Promo WHERE Code = @code AND Del = 0";
const getPromoItems = "SELECT * FROM WebResource.dbo.PromoRewards WHERE PromoID = @id";
const getPromoLogsCount = "SELECT * FROM WebResource.dbo.PromoLog WHERE PromoID = @id";
const pushPromoLog = "INSERT INTO WebResource.dbo.PromoLog (PromoID, UserUID, Date) VALUES (@id, @uid, GETDATE())";
const disablePromoCode = "UPDATE WebResource.dbo.Promo SET Del = 1 WHERE RowID = @id";

module.exports = {
    checkUserDeletedCharacter,
    checkUserActiveCharacter,
    getCharNameById,
    checkCharacterDataQuery,
    getCharById,
    checkUserSlots,
    resurrectQuery,
    deleteCharQuery,
    deletedCharsQuery,
    activeCharsQuery,
    userMaxKillsQuery,
    pvpRewardQuery,
    addPersonalRewardLogQuery,
    pvpRewardsQuery,
    personalPvpRewardsQuery,
    getSpendersQuery,
    getSpenderItems,
    getSpenderItem,
    getSpenderRewards,
    getSpenderStatus,
    updateSpenderStatus,
    insertSpenderStatus,
    addSpenderRewardLog,
    clearUserSpenderLogs,
    clearUserSpenderProgress,
    getRouletteItems,
    addRouletteSpinLog,
    getUserRouletteRewards,
    getPromoByCode,
    getPromoItems,
    getPromoLogsCount,
    pushPromoLog,
    disablePromoCode
}