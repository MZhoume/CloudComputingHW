import * as ES from 'elasticsearch';
import {esConfig} from "../config";

export class EsService {
    private static esClient: ES.Client = new ES.Client(esConfig);

    public static getEsClient(): ES.Client {
        return this.esClient;
    }
}
