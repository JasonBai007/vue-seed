import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/getTab/, {
        "data|10": [{
            "id|1": [11, 22],
            "account|+1": 1,
            "host|1": ['项目一', '项目二'],
            "phone": 'https://minisite.ctags.cn/audi',
            "contacts|1": ['项目三', '项目四'],
            "date|1": '2017.08.01-2017.09.01',
            "email|1": ['运行中', '待开启'],
            "state1": '@date',
            "state2": '@first',
        }],
        "pageData": {
            currentPage: 1,
            total: 166,
        },
        "msg": "Success",
        "status": "YQ-000"
    })

}
