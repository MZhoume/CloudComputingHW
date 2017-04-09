## E6998 Sec 5 Cloud Computing Homework
#### Ming Zhou (UNI: MZ2591), Emily Hua (UNI: YH2901)

***
### Homework 1
url: http://pre-env.jih6zvtkdb.us-east-1.elasticbeanstalk.com/

- **Backend**: Backend services, written in TypeScript with NodeJS and ExpressJS
- **Frontend**: Frontend views, written in TypeScript with AngularJS v2
- **ElasticBeanstalk**: Elastic Beanstalk configuration and app archive
- **Lambda**: (Unused), reserved for gluing backend services together

##### Tasks:
Backend:
- [x] Fetch tweets in real time from `Twitter Streaming API`
- [x] Use `Elastic Search` to store and index the tweets
- [x] Expose `RESTful APIs` for searching with `content`, `user` and `location`
- [x] Deploy on an auto-scalling environment

Frontend:
- [x] Web UI for user to search for given `keywords`
- [x] Use `Google Map SDK` to display the tweets in its original location
- [x] Search tweets from the user chosen location and distance

***
### Homework 2
url: http://ec2-52-70-84-118.compute-1.amazonaws.com/

kibana url: http://ec2-52-70-84-118.compute-1.amazonaws.com:5601/

kafka manager url: http://ec2-52-70-84-118.compute-1.amazonaws.com:9000/

zookeeper url: http://ec2-52-70-84-118.compute-1.amazonaws.com:2181/

- **Backend**: Backend services, written in TypeScript with NodeJS and ExpressJS, modular design
- **Frontend**: Frontend views, written in TypeScript with AngularJS v2 and BootStrap


##### Tasks:
Backend:
- [x] Fetch tweets in real time from `Twitter Streaming API`
- [x] Use `kafka` as the Event Queue replacement for AWS SQS
- [x] Gather tweet sentiment data from `watson` from multi-threading worker poll
- [x] Send processed tweets to AWS SNS to notify the persisting procedure
- [x] Use `Elastic Search` to store and index the tweets

Frontend:
- [x] Web UI for user to search for given `keywords` and `username`
- [x] Use `Google Map SDK` to display the tweets in its original location
- [x] Draw sentiment markers (with happy, neutral and sad face)
- [x] Update the tweets list in real time, with sentiment displayed as background
