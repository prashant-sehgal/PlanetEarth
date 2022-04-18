import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import { StyleSheet, Text, View, StatusBar as StatusBarApi } from 'react-native'
import Context, { NewsContext } from './api/Context'
import Header from './components/Header'

function App() {
  const { darkTheme } = useContext(NewsContext)
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? '#282c35' : 'white',
      }}
    >
      <Header />
      <StatusBar style={darkTheme ? 'light' : 'dark'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBarApi.currentHeight,
  },
})

export default () => (
  <Context>
    <App />
  </Context>
)
