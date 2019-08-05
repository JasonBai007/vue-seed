import Mock from 'mockjs'
let debug = 1;
if (debug) {
  Mock.mock(/getKeyIndexData/, {
    code: 0,
    msg: "Success",
    'data|6': [{
      num: '@integer(1000,10000)',
      title: '@cname'
    }]
  })

}
