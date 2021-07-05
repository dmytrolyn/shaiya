const userDataUnprotectedQuery = "SELECT * FROM PS_UserData.dbo.Users_Master WHERE UserID = @login";
const createChangePassLogQuery = "INSERT INTO WebResource.dbo.PwChangeLog (UserUID, OldPw, NewPw, Date) VALUES (@id, @oldpass, @newpass, GETDATE())";
const changePasswordQuery = "UPDATE PS_UserData.dbo.Users_Master SET Pw = @password WHERE UserID = @login";
const getPasswordQuery = "SELECT Pw FROM PS_UserData.dbo.Users_Master WHERE UserID = @login";
const registerQuery = "INSERT INTO PS_UserData.dbo.Users_Master (UserID, Pw, JoinDate, Status, Leave, UserIp, Point) VALUES (@login, @password, GETDATE(), 0, 0, @ip, 0)";
const checkUserQuery = "SELECT COUNT(*) AS Count FROM PS_UserData.dbo.Users_Master WHERE UserID = @login";
const userDataQuery = "SELECT * FROM PS_UserData.dbo.Users_Master WHERE UserID = @login AND Pw = @password";

module.exports = {
    userDataUnprotectedQuery,
    createChangePassLogQuery,
    changePasswordQuery,
    getPasswordQuery,
    registerQuery,
    checkUserQuery,
    userDataQuery
}