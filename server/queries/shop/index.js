const getDonateItems = 'SELECT * FROM WebResource.dbo.Donate';
const getShopItems = `SELECT A.RowID, B.ItemName AS Title, A.Description, A.Category, A.Count, A.Price, A.Image, A.Icon FROM WebResource.dbo.Shop A
INNER JOIN PS_GameDefs.dbo.Items B ON A.ItemID = B.ItemID`;
const getShopItem = `SELECT A.RowID, A.ItemID, B.ItemName, A.Price, A.Count FROM WebResource.dbo.Shop A
FULL OUTER JOIN PS_GameDefs.dbo.Items B ON A.ItemID = B.ItemID
WHERE A.RowID = @id`;
const pushShopLog = "INSERT INTO WebResource.dbo.ShopLog (UserUID, RowID, Date) VALUES (@uid, @id, GETDATE())";

module.exports = {
    getDonateItems,
    getShopItems,
    getShopItem,
    pushShopLog
}