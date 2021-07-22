const AWS = require("aws-sdk");
const CONFIG = require("../config/aws");

module.exports.dynamoDBHelper = async function dynamoDBHelper() {
    AWS.config.update({region: CONFIG.REGION});
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
    return dynamoDB;
}