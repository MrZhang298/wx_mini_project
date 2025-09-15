import { PropsWithChildren } from 'react'
import { View } from '@tarojs/components'

import './index.less'

interface MainViewProps {
  // 你可以在这里添加其他 props
}

const MainView: React.FC<PropsWithChildren<MainViewProps>> = ({ children }) => {
  return (
    <View className='main-view'>
      {children}
    </View>
  )
}

export default MainView
