import Taro from "@tarojs/taro";

export const setGlobalAppData = appData => {
  if (appData && typeof appData === 'object' && !Array.isArray(appData)) {
    Taro.showToast({ title: '参数传递错误', icon: 'none' })
    return
  }
  const app = Taro.getApp()
  Object.keys(appData).forEach(key => {
    app.globalData[key] = appData[key]
  })
}
