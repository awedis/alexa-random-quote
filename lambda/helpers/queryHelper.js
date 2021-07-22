const CONFIG = require("../config/aws");
const tableName = CONFIG.TABLE_NAME;
const dbHelper = require("./dbHelper");

var queries = function () {};

queries.prototype.getQuotes = async (languageID) => {
    const params = {
        TableName: tableName,
        KeyConditionExpression: "#languageID = :language_id",
        ExpressionAttributeNames: {
            "#languageID": "languageId"
        },
        ExpressionAttributeValues: {
            ":language_id": languageID
        }
    }
    const dynamoDB = await dbHelper.dynamoDBHelper();
    const response = await dynamoDB.query(params).promise();
    return response;
}

module.exports = new queries();