import MainView from '@/components/mainView'
import Taro, { useDidHide, useLoad } from '@tarojs/taro'
import { useRef } from 'react'
import { Button } from '@tarojs/components'

const TextView = () => {
  const eventRef = useRef<any>(null)
  useLoad(() => {
    // 在目标页面中获取数据和发送数据
    // 页面 onLoad 或 componentDidMount 中
    const eventChannel = Taro.getCurrentInstance?.()?.page?.getOpenerEventChannel?.()
    if (eventChannel) {
      eventRef.current = eventChannel
      // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
      eventChannel.on('acceptDataFromOpenerPage', handleAcceptDataFromOpenerPage);

      // 向上一个页面发送数据
      // eventChannel.emit('acceptDataFromOpenedPage', { data: '这是来自被打开页面的数据' });
    }
  })

  useDidHide(() => {
    eventRef?.current?.off('acceptDataFromOpenerPage', handleAcceptDataFromOpenerPage)
  })

  const handleAcceptDataFromOpenerPage = (data: any) => {
    console.log('data', data)
  }

  return (
    <MainView>
      text
      <Button onClick={() => { eventRef?.current?.emit('acceptDataFromOpenedPage', { data: '====🚀====' }) }}>emit</Button>
    </MainView>
  )
}

export default TextView
