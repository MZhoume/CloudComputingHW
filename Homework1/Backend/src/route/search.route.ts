import {Router} from 'express';
import {EsService} from "../elasticsearch/esservice";

export const searchRouter: Router = Router();
const esClient = EsService.getEsClient();

searchRouter.get('/all', (req, res) => {
    let search = {
        index: "twitter",
        body: {
            size: 300,
            sort: [
                {id: {order: "desc"}}
            ],
            query: {}
        }
    };

    let from = req.param('from');
    if (from) {
        search.body.query = {
            range: {
                id: {
                    gte: from
                }
            }
        };
    }

    esClient.search(search).then((r) => {
        res.send(r.hits.hits);
    });
});

searchRouter.get('/user', (req, res) => {
    let key = req.param('key');
    if (key) {
        esClient.search({
            index: "twitter",
            body: {
                query: {
                    match: {
                        user: key
                    }
                },
                sort: [
                    {id: {order: "desc"}}
                ]
            }
        }).then((r) => {
            res.send(r.hits.hits);
        });
    } else {
        res.send('Please specify the user key.');
    }
});

searchRouter.get('/content', (req, res) => {
    let key = req.param('key');
    if (key) {
        esClient.search({
            index: "twitter",
            body: {
                query: {
                    match: {
                        content: key
                    }
                },
                sort: [
                    {id: {order: "desc"}}
                ]
            }
        }).then((r) => {
            res.send(r.hits.hits);
        });
    } else {
        res.send('Please specify the content key.');
    }
});

searchRouter.get('/geo', (req, res) => {
    let lat = req.param('lat');
    let lon = req.param('lon');
    let dis = req.param('dis');
    if (lat && lon && dis) {
        esClient.search({
            index: 'twitter',
            body: {
                query: {
                    bool: {
                        must: {
                            match_all: {}
                        },
                        filter: {
                            geo_distance: {
                                distance: dis,
                                location: {
                                    lat: Number.parseFloat(lat),
                                    lon: Number.parseFloat(lon)
                                }
                            }
                        }
                    }
                },
                sort: {
                    _geo_distance: {
                        location: {
                            lat: Number.parseFloat(lat),
                            lon: Number.parseFloat(lon)
                        },
                        order: "asc",
                        unit: "km"
                    }
                }
            }
        }).then((r) => {
            res.send(r.hits.hits);
        });
    } else {
        res.send('Please specify the geo location.');
    }
});

searchRouter.get('/geo/name', (req, res) => {
    let key = req.param('key');
    if (key) {
        esClient.search({
            index: "twitter",
            body: {
                query: {
                    match: {
                        locName: key
                    }
                },
                sort: [
                    {id: {order: "desc"}}
                ]
            }
        }).then((r) => {
            res.send(r.hits.hits);
        });
    } else {
        res.send('Please specify the location name.');
    }
});
