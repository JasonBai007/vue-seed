import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/getSel/, {
        "data|5": [{
            "id": '@integer(1,100)',
            "name": '@first'
        }],
        "pageData": {
            currentPage: 1,
            total: 166,
        },
        "msg": "Success",
        "status": "YQ-000"
    })
}
