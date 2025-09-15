import { PropsWithChildren, useEffect } from 'react'
import { getApp, useLaunch } from '@tarojs/taro'

import './app.less'

const globalData = {
  userInfo: null
}

function App({ children }: PropsWithChildren) {
  const setUserInfo = (userInfo: any) => {
    globalData.userInfo = userInfo
  }

  useLaunch(() => {
    console.log('App launched.')
  })

  useEffect(() => {
    const app = getApp()
    app.globalData = globalData
    app.setUserInfo = setUserInfo
  }, [])

  // children 是将要会渲染的页面
  return children
}

export default App
