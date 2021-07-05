const getOccupiedBankSlots = 'SELECT * FROM PS_Billing.dbo.Users_Product WHERE UserUID = @uid ORDER BY Slot';
const reduceUserPoints = "UPDATE PS_UserData.dbo.Users_Master SET Point=Point-@diff WHERE UserUID = @uid";
const pushUserRewardItem = `INSERT INTO PS_Billing.dbo.Users_Product 
(UserUID, Slot, ItemID, ItemCount, ProductCode, OrderNumber, BuyDate)
VALUES (@uid, @slot, @id, @count, @pc, NULL, GETDATE())`;

module.exports = {
    getOccupiedBankSlots,
    reduceUserPoints,
    pushUserRewardItem
}