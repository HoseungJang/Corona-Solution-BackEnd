# Corona Solution [![Build Status](https://travis-ci.com/HoseungJang/coronaSolution.svg?token=NqwUG8A1PUU6tJg9chsq&branch=master)](https://travis-ci.com/HoseungJang/coronaSolution)

## Overview

This is a back-end application that provides informations about the number of confirmed cases of COVID-19, mask inventory, and locations of screening center in south korea.

## About Deployment

We are always considering a great user experience and recognize that it can harm user experience to suspend application for deploying new version of this application. So we have introduced a non-stop deployment by blue-green technique using NginX and Docker.

There's two Docker containers, but either one is not running. In other words, users can only access to running one. So we can deploy this application to stopped one and there's no downtime caused by deployment therefore. And then we have only to turn the traffic to updated version when deployment is done.

You can see the details about blue-green deployment: [https://martinfowler.com/bliki/BlueGreenDeployment.html](https://martinfowler.com/bliki/BlueGreenDeployment.html)

### Using

- TypeScript/Express
- TypeORM
- Cheerio
- Travis CI
- AWS RDS
- AWS CloudFront
- Mocha/Chai
