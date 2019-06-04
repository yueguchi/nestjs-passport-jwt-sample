<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

In this tutorial, you'll get introduced to Nest.js by building your first REST API CRUD application with this framework which is built on top of Node.js, Express.js and TypeScript and inspired by Angular.

We'll be using TypeORM as the ORM to abtract away the differences between the various database management system. We'll be using SQLite because it doesn't need any special installation in but you can very much use any database supported by TypeORM like MySQL or Oracle.

> Read [Nest.js Tutorial: Build your First REST API CRUD App with TypeORM](https://www.techiediaries.com/nestjs-tutorial-rest-api-crud)

```bash
$ git clone https://github.com/techiediaries/nestjs-crud-rest-api.git
```

## Installation

```bash
$ cd nestjs-crud-rest-api
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# incremental rebuild (webpack)
$ npm run webpack
$ npm run start:hmr

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

  Nest is [MIT licensed](LICENSE).

## demo

```
▼登録
$curl -H 'Content-Type:application/json' -X POST 'http://localhost:3000/contacts/create' -d "{\"firstName\": \"yu\", \"lastName\": \"eguchi\", \"email\": \"eguchi@asial.co.jp\", \"phone\": \"09000000000\", \"city\": \"tokyo\", \"country\": \"japan\"}" | jq .

▼一覧
$ curl 'http://localhost:3000/contacts' | jq .
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   131  100   131    0     0  15739      0 --:--:-- --:--:-- --:--:-- 16375
[
  {
    "id": 1,
    "firstName": "yu",
    "lastName": "eguchi",
    "email": "eguchi@asial.co.jp",
    "phone": "09000000000",
    "city": "tokyo",
    "country": "japan"
  }
]

```

## auth demo(passport-jwt)

```
▼loginアカウント登録
$ curl -H 'Content-Type:application/json' -X POST 'http://localhost:3000/auth/register' -d "{\"name\": \"eguchi\", \"email\": \"eguchi@asial.co.jp\", \"password\": \"testest\"}"| jq .


```