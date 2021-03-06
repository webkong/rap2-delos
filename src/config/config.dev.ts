import { IConfigOptions } from "../types"

const config: IConfigOptions = {
  version: 'v2.8.0',
  serve: {
    port: (process.env.SERVE_PORT && parseInt(process.env.SERVE_PORT)) || 8080,
    path: '',
  },
  keys: ['some secret hurr'],
  session: {
    key: 'rap2:sess',
  },
  db: {
    dialect: 'mysql',
    host: process.env.MYSQL_URL ?? 'localhost',
    port: (process.env.MYSQL_PORT && parseInt(process.env.MYSQL_PORT)) || 3306,
    username: process.env.MYSQL_USERNAME ?? 'root',
    password: process.env.MYSQL_PASSWD ?? '29837DF983(*&34kfjD(*3kjf(',
    database: process.env.MYSQL_SCHEMA ?? 'RAP2_DELOS_APP',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
    dialectOptions: {
      connectTimeout: 20000,
    },
  },
  redis: {},
  mail: {
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: 'rap2_notify@outlook.com',
      pass: ''
    }
  },
  mailSender: 'rap2_notify@outlook.com',


}

export default config
