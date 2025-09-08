import { View, Button } from '@tarojs/components'
import Taro, { useLoad, usePullDownRefresh } from '@tarojs/taro'
import './index.less'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  usePullDownRefresh(() => {
    console.log('Page refreshed.')
    setTimeout(() => {
      console.log('Page stop refreshed.')
      Taro.stopPullDownRefresh()
    }, 1000)
  })

  const showToast = () => {
    Taro.showToast({
      title: 'Hello, World!',
      icon: 'none',
      duration: 2000
    })
  }

  return (
    <View className='main'>
      111
      <Button onClick={showToast}>toast</Button>
    </View>
  )
}
