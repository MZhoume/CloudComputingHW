import * as AWS from 'aws-sdk';

const sns = new AWS.SNS();

export function tryFind(payload: any, key: string, def: any): any {
    if (payload) {
        if (payload[key]) {
            return payload[key];
        } else if (payload.payload && payload.payload[key]) {
            return payload.payload[key];
        } else if (payload.item && payload.item[key]) {
            return payload.item[key];
        } else if (payload.items && payload.items[key]) {
            return payload.items[key];
        } else if (payload.value && payload.value[key]) {
            return payload.value[key];
        } else if (payload.values && payload.values[key]) {
            return payload.values[key];
        }
    }
    return def;
}

export function genLambdaError(code: number, message: string): Error {
    return new Error(JSON.stringify({ code: code, message: message }));
}

export function publishSns(message: string, arn: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
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