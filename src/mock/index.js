import Mock from "mockjs";
let debug = 1;
if (debug) {
  Mock.mock(/login/, {
    data: {
      userId: "@integer(1,10)",
      "userName|1": ["鲁班七号", "夏侯惇", "蔡文姬", "王昭君", "妲己"],
      token: "@string(30)"
    },
    msg: "Success",
    status: "YQ-000"
  });
  Mock.mock(/getMenu/, {
    data: {
      menu: [
        {
          name: "项目管理",
          name_en: "Projects",
          router: "/",
          icon: "el-icon-time",
          children: [
            {
              name: "开发备忘",
              name_en: "Notes",
              router: "/notes",
              icon: "el-icon-date"
            },
            {
              name: "关于作者",
              name_en: "About",
              router: "/about",
              icon: "el-icon-document"
            }
          ]
        },
        {
          name: "天气预报",
          name_en: "Weather",
          router: "/weather",
          icon: "el-icon-picture-outline",
          children: []
        },
        {
          name: "魔幻立方",
          name_en: "Cube",
          router: "/cube",
          icon: "el-icon-menu",
          children: []
        },
        {
          name: "权限测试",
          name_en: "Authority",
          router: "/authority",
          icon: "el-icon-setting",
          children: []
        }
      ]
    },
    msg: "Success",
    status: "YQ-000"
  });
}
