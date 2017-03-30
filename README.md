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
