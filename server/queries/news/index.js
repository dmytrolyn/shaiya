const getNewsQuery = "SELECT * FROM WebResource.dbo.News WHERE Del != 1";

module.exports = {
    getNewsQuery
}