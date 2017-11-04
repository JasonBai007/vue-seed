import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/url/, {
        code: 0,
        status: true,
        msg: "",
        data: {

        }
    })

}
