import Mock from 'mockjs'
let debug = 1;
if (debug) {
    Mock.mock(/login/, {
        "data": {
            userId: "@integer(1,10)",
            "userName|1": ["鲁班七号", "典韦", "蔡文姬", "王昭君", "妲己","铠"]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
    Mock.mock(/getMenu/, {
        "data": {
            menu: [{
                name: '项目管理',
                router: '',
                icon: 'el-icon-time',
                children: [{
                    name: '项目信息',
                    router: '/project-info',
                    icon: 'el-icon-date'
                }, {
                    name: '报名列表',
                    router: '/enroll-list',
                    icon: 'el-icon-document'
                }]
            }, {
                name: '天气预报',
                router: '/weather',
                icon: 'el-icon-picture-outline',
                children: []
            }, {
                name: '魔幻立方',
                router: '/cube',
                icon: 'el-icon-menu',
                children: []
            }, {
                name: '权限测试',
                router: '/authority-test',
                icon: 'el-icon-setting',
                children: []
            }]
        },
        "msg": "Success",
        "status": "YQ-000"
    })
}
