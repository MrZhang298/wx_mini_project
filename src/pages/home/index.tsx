// import { useEffect, useMemo, useState } from 'react'
import { Button, Text } from '@tarojs/components'
import Taro, { useLoad, usePullDownRefresh, useReady } from '@tarojs/taro'

import MainView from '@/components/mainView'

import api from '../../request'

import './index.less'

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
    const a = res?.data?.a
    console.log(a)
  }

  const toTextPage = () => {
    Taro.navigateTo({
      url: '/pages/text/index'
    })
  }

  return (
    <MainView>
      <Button onClick={showToast}>toast</Button>
      <Button onClick={toTextPage}>toast1</Button>
      <Text>111</Text>
    </MainView>
  )
}
