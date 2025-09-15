// import { useEffect, useMemo, useState } from 'react'
import { Button, Text } from '@tarojs/components'
import Taro, { useLoad, usePullDownRefresh, useReady } from '@tarojs/taro'

import MainView from '@/components/mainView'

import api from '../../request'

import './index.less'
import { useState } from 'react'

// const useCount = (count: number) => {
//   return useMemo(() => {
//     return count + 1
//   }, [count])
// }
//
// const useCount2 = (count: number) => {
//   const [count2, setCount2] = useState(count)
//   useEffect(() => {
//     setCount2(count + 2)
//   }, [count])
//   return count2
// }

export default function Index () {
  const [string, setString] = useState('')
  useLoad(() => {
    console.log('Page loaded.')
  })

  useReady(() => {
    console.log('Page ready.')
  })

  usePullDownRefresh(() => {
    console.log('Page refreshed.')
    setTimeout(() => {
      console.log('Page stop refreshed.')
      Taro.stopPullDownRefresh()
    }, 1000)
  })

  const showToast = async () => {
    const res = await api.postRequest<{ a: string }, {}>('/api/users/list', {})
    console.log(res)
    const a = res && res.data && res.data.a
    console.log(a)
  }

  const toTextPage = () => {
    Taro.navigateTo({
      url: '/pages/text/index',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data: { data: string }) {
          console.log(data)
          setString(data.data || JSON.stringify(data))
        },
      },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  }

  const hideTabBar = () => {
    Taro.hideTabBar({
      animation: true,
    })
  }

  const showTabBar = () => {
    Taro.showTabBar({
      animation: true,
    })
  }

  return (
    <MainView>
      <Button onClick={showToast}>toast</Button>
      <Button onClick={toTextPage}>toast1</Button>
      <Button onClick={hideTabBar}>toast2</Button>
      <Button onClick={showTabBar}>toast3</Button>
      <Text>{string}</Text>
    </MainView>
  )
}
