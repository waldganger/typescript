// 16:32 https://www.youtube.com/watch?v=I6ypD7qv3Z8&t=611s
import {MikroORM } from "@mikro-orm/core"
import { __prod__ } from "./constants";


const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'lireddit',
    type: 'postgresql',
    user: '',
    password: '',
    debug: !__prod__
  });
}
