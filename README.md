# Corona Solution [![Build Status](https://travis-ci.com/HoseungJang/coronaSolution.svg?token=NqwUG8A1PUU6tJg9chsq&branch=master)](https://travis-ci.com/HoseungJang/coronaSolution)

## Overview

This is a back-end application that provides informations about the number of confirmed cases of COVID-19, mask inventory, and locations of screening center in south korea.

코로나 19 확진자 수, 마스크 재고, 선별 진료소 위치 등의 정보를 제공해주는 백엔드 애플리케이션 입니다.

## About Deployment

We are always considering a great user experience and recognized that it can harm user experience to suspend application for deploying new version of this application. So we have introduced a non-stop deployment by blue-green technique using NginX and Docker.

There's two Docker containers, but either one is not running. In other words, users can only access to running one. So we can deploy this application to stopped one and there's no downtime caused by deployment therefore. And then we have only to turn the traffic to updated version when deployment is done.

You can see the details about blue-green deployment: [https://martinfowler.com/bliki/BlueGreenDeployment.html](https://martinfowler.com/bliki/BlueGreenDeployment.html)

저희는 항상 좋은 사용자 경험에 대해서 생각합니다. 또한 배포하기 위해서 애플리케이션의 실행을 잠시 중단시키는 것이 사용자 경험에 해를 끼칠 수 있다는 점도 인지하였습니다. 따라서 저희는 Docker와 NginX를 사용한 블루-그린 무중단 배포를 도입하였습니다.

블루-그린 배포를 위해 두 개의 도커 컨테이너가 필요합니다. 그리고 실제로 유저의 트래픽을 받을 용도인 컨테이너 하나 만을 배포해둡니다. 그러면 새롭게 배포할 일이 생겼을 때, 정지되어있던 컨테이너를 실행시켜 배포를 마치고, 트래픽을 새롭게 배포된 컨테이너로 바꾸어 주기만 하면 됩니다.

블루-그린 배포에 대한 자세한 내용은 아래의 링크로 들어가시면 확인하실 수 있습니다.

[https://martinfowler.com/bliki/BlueGreenDeployment.html](https://martinfowler.com/bliki/BlueGreenDeployment.html)

### Using

- TypeScript/Express
- TypeORM
- Cheerio
- Travis CI
- AWS RDS
- AWS CloudFront
- Mocha/Chai
