"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const sns = new AWS.SNS();
function tryFind(payload, key, def) {
    if (payload) {
        if (payload[key]) {
            return payload[key];
        }
        else if (payload.payload && payload.payload[key]) {
            return payload.payload[key];
        }
        else if (payload.item && payload.item[key]) {
            return payload.item[key];
        }
        else if (payload.items && payload.items[key]) {
            return payload.items[key];
        }
        else if (payload.value && payload.value[key]) {
            return payload.value[key];
        }
        else if (payload.values && payload.values[key]) {
            return payload.values[key];
        }
    }
    return def;
}
exports.tryFind = tryFind;
function genLambdaError(code, message) {
    return new Error(JSON.stringify({ code: code, message: message }));
}
exports.genLambdaError = genLambdaError;
function publishSns(message, arn) {
    return new Promise((resolve, reject) => {
        sns.publish({
            Message: message,
            TopicArn: arn
        }, (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
exports.publishSns = publishSns;
