import { Context, Callback } from 'aws-lambda';
import { HttpCode } from './httpcode';

export function handler(event: any, context: Context, callback: Callback): void {
    function success(res: any): void {
        callback(null, res);
    }
    function error(code: HttpCode, res: any): void {
        callback(new Error(`${code} ${res}`), null);
    }

    success('Hello World!');
}