'use strict'
const buildtype=process.argv.slice(2)[0]
console.log('-----------start build----'+buildtype)
let obj={
  NODE_ENV: '"production"'
}
switch (buildtype){
  case 'dev'://开发
        process.env.srconfig='dev'
        obj.srconfig='"dev"'
        break
  case 'test'://测试
    process.env.srconfig='test'
    obj.srconfig='"test"'
    break
  default://默认开发
    process.env.srconfig=''
    obj.srconfig='""'
    break

}
module.exports = obj
