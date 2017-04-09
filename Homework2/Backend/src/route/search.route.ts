import { Router } from 'express';
import { EsClient } from '../elasticsearch/esclient';

export const searchRouter: Router = Router();

searchRouter.get('/all', (req, res) => {
    let from = req.params('from');

    EsClient.search('twitter', {
        size: 100,
        sort: [
            { id: { order: 'desc' } }
        ],
        query: {
            range: {
                id: {
                    gte: from
                }
            }
        }
    }).then((r) => {
        res.send(r.hits.hits);
    });
});

searchRouter.get('/user', (req, res) => {
    let key = req.params('key');

    EsClient.search('twitter', {
        query: {
            match: {
                user: key
            }
        },
        sort: [
            { id: { order: 'desc' } }
        ]
    }).then((r) => {
        res.send(r.hits.hits);
    });
});

searchRouter.get('/content', (req, res) => {
    let key = req.params('key');

    EsClient.search('twitter', {
        query: {
            match: {
                content: key
            }
        },
        sort: [
            { id: { order: 'desc' } }
        ]
    }).then((r) => {
        res.send(r.hits.hits);
    });
});

searchRouter.get('/geo', (req, res) => {
    let lat = req.params('lat');
    let lon = req.params('lon');
    let dis = req.params('dis');

    EsClient.search('twitter', {
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
                order: 'asc',
                unit: 'km'
            }
        }
    }).then((r) => {
        res.send(r.hits.hits);
    });
});

searchRouter.get('/geo/name', (req, res) => {
    let key = req.params('key');

    EsClient.search('twitter', {
        query: {
            match: {
                locName: key
            }
        },
        sort: [
            { id: { order: 'desc' } }
        ]
    }).then((r) => {
        res.send(r.hits.hits);
    });
});
