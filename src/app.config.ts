export default defineAppConfig({
  pages: ["pages/home/index", "pages/index/index"],
  entryPagePath: "pages/home/index",
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999999", // 添加默认文字颜色
    selectedColor: "#333333", // 添加选中文字颜色
    backgroundColor: "#ffffff", // 添加背景色
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./image/home.png",
        selectedIconPath: "./image/home1.png",
      },
      {
        pagePath: "pages/index/index",
        text: "我的",
        iconPath: "./image/home.png",
        selectedIconPath: "./image/home1.png",
      },
    ],
  },
});
