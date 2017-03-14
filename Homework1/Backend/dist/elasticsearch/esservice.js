"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ES = require("elasticsearch");
const config_1 = require("../config");
class EsService {
    static getEsClient() {
        return this.esClient;
    }
}
EsService.esClient = new ES.Client(config_1.esConfig);
exports.EsService = EsService;
//# sourceMappingURL=esservice.js.map