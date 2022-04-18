import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useContext, useState } from 'react'
import { SceneMap, TabView } from 'react-native-tab-view'
import DiscoverScreen from '../Screens/DiscoverScreen'
import NewsScreen from '../Screens/NewsScreen'
import TabNavigation from './TabNavigation'
import { NewsContext } from '../api/Context'

export default function Header() {
  const layout = useWindowDimensions()
  // const [index, setIndex] = useState(1)
  const { index, setIndex } = useContext(NewsContext)

  const [routes] = useState([
    { key: 'first', title: 'Discover' },
    { key: 'second', title: 'News' },
  ])

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  })

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TabNavigation index={index} setIndex={setIndex} />}
    />
  )
}

const styles = StyleSheet.create({})
