import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../api/Context'

interface Item {
  title: string
  urlToImage: string
  description: string
  author: string | undefined
  content: string
  url: string
}

interface Props {
  item: Item
  index: number
}

export default function SingleNews(props: Props) {
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width
  const { darkTheme } = useContext(NewsContext)
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        // transform: [{ scaleY: -1 }],
        backgroundColor: 'black',
      }}
    >
      <Image
        source={{ uri: props.item.urlToImage }}
        style={{ width: windowWidth, resizeMode: 'cover', height: '45%' }}
      />

      <View
        style={{
          ...styles.description,
          // backgroundColor: '#282c35',
          backgroundColor: darkTheme ? '#282c35' : 'white',
        }}
      >
        <Text style={{ ...styles.title, color: darkTheme ? 'white' : 'black' }}>
          {props.item.title}
        </Text>

        <Text style={{ color: darkTheme ? 'white' : 'black', fontSize: 20 }}>
          {props.item.description}
        </Text>

        <Text style={{ color: darkTheme ? 'white' : 'black', fontSize: 20 }}>
          Short By:
          <Text> {props.item.author ?? 'unkown'}</Text>
        </Text>

        <ImageBackground
          blurRadius={30}
          style={styles.footer}
          source={{ uri: props.item.urlToImage }}
        >
          <TouchableOpacity onPress={() => Linking.openURL(props.item.url)}>
            {/* <Text style={{ fontSize: 15, color: 'blue' }}>
              {props.item?.content?.slice(0, 45)}...
            </Text> */}
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              Read More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  description: {
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  footer: {
    width: Dimensions.get('window').width,
    height: 80,
    padding: 10,
  },
})
