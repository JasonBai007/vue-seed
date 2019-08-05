import Mock from "mockjs";
let debug = 1;
if (debug) {
  // 登录接口
  Mock.mock(/login/, {
    code: 0,
    msg: "Success",
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["销售总监"],
      token: "@string(30)"
    }
  });

  // 获取权限元数组
  Mock.mock(/getMenu/, {
    code: 0,
    msg: "Success",
    data: {
      menu: [{
        name: "Dashboard",
        name_en: "Dashboard",
        router: "/dashboard",
        icon: "el-icon-menu",
        children: []
      }, {
        name: "业绩分析",
        name_en: "Marketing",
        router: "/marketing",
        icon: "el-icon-s-marketing",
        children: [{
          name: "销售明细",
          name_en: "Detail",
          router: "/detail",
          icon: ""
        }, {
          name: "漏斗洞察",
          name_en: "Funnel",
          router: "/funnel",
          icon: ""
        }]
      }, {
        name: "线上分析",
        name_en: "Website",
        router: "/website",
        icon: "el-icon-s-platform",
        children: [{
          name: "月度分析",
          name_en: "Month",
          router: "/month",
          icon: ""
        }, {
          name: "季度分析",
          name_en: "Quarter",
          router: "/quarter",
          icon: ""
        }]
      }, {
        name: "受众分析",
        name_en: "People",
        router: "/people",
        icon: "el-icon-s-custom",
        children: [{
          name: "受众画像",
          name_en: "Profile",
          router: "/profile",
          icon: ""
        }, {
          name: "地域分布",
          name_en: "Region",
          router: "/region",
          icon: ""
        }]
      }, {
        name: "产品分析",
        name_en: "Product",
        router: "/product",
        icon: "el-icon-s-data",
        children: [{
          name: "竞争产品",
          name_en: "Competion",
          router: "/competion",
          icon: ""
        }, {
          name: "产品口碑",
          name_en: "Praise",
          router: "/praise",
          icon: ""
        }]
      }, {
        name: "人员管理",
        name_en: "Account",
        router: "/account",
        icon: "el-icon-s-tools",
        children: []
      }, {
        name: "气象信息",
        name_en: "Weather",
        router: "/weather",
        icon: "el-icon-picture",
        children: []
      }]
    }
  });

  // 促销大区列表
  Mock.mock(/campaign/, {
    code: 0,
    msg: 'success',
    data: [{
      id: 1,
      name: '大中华区促销活动'
    }, {
      id: 2,
      name: '欧美促销活动'
    }, {
      id: 3,
      name: '东南亚促销活动'
    }]
  })
}
