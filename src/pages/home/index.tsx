// import { useEffect, useMemo, useState } from 'react'
import { View, Button } from '@tarojs/components'
import Taro, { useLoad, usePullDownRefresh, useReady } from '@tarojs/taro'

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

  return (
    <View className='main'>
      <Button onClick={showToast}>toast</Button>
    </View>
  )
}
