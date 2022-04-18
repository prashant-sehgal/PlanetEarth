import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from '@expo/vector-icons'
import { NewsContext } from '../api/Context'

interface Props {
  index: number
  setIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function TabNavigation(props: Props) {
  const { fetchNews, darkTheme, setDarkTheme } = useContext(NewsContext)

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: darkTheme ? '#282c35' : 'white',
      }}
    >
      {props.index === 0 ? (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setDarkTheme(!darkTheme)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? 'lightgrey' : 'black' }}
          >
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="#007fff"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => props.setIndex(props.index === 0 ? 1 : 0)}
        >
          <SimpleLineIcons name="arrow-left" size={15} color="#007fff" />
          <Text
            style={{ ...styles.text, color: darkTheme ? 'lightgrey' : 'black' }}
          >
            Discover
          </Text>
        </TouchableOpacity>
      )}

      <Text style={{ ...styles.center, color: darkTheme ? 'white' : 'black' }}>
        {props.index === 0 ? 'Discover' : 'All News'}
      </Text>

      {props.index === 0 ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => props.setIndex(props.index === 0 ? 1 : 0)}
        >
          <Text
            style={{ ...styles.text, color: darkTheme ? 'white' : 'black' }}
          >
            All News
          </Text>
          <SimpleLineIcons name="arrow-right" size={15} color="#007fff" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.right} onPress={() => fetchNews()}>
          <Ionicons name="md-reload" size={24} color="#007fff" />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  center: {
    fontWeight: '700',
    fontSize: 16,
    paddingBottom: 6,
    borderBottomColor: '#007fff',
    borderBottomWidth: 5,
    borderRadius: 10,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-end',
  },
})
