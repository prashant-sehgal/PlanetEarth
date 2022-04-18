import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext } from 'react'
import { NewsContext } from '../api/Context'
import { categories, sources } from '../api/api'
import Carousel from 'react-native-snap-carousel'
import Search from '../components/Search'

export default function DiscoverScreen() {
  const { setCategory, setSource, darkTheme } = useContext(NewsContext)
  const windowWidth = Dimensions.get('window').width
  const slideWidth = windowWidth / 3.5

  return (
    <View style={styles.discover}>
      {/* search  */}
      <Search />

      {/* categories */}
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? 'white' : 'black' }}
      >
        Categories
      </Text>
      <Carousel
        layout="default"
        data={categories}
        renderItem={(props) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(props.item.name)}
          >
            <Image
              source={{ uri: props.item.pic }}
              style={styles.categoryName}
            />
            <Text
              style={{ ...styles.name, color: darkTheme ? 'white' : 'black' }}
            >
              {props.item.name}
            </Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={slideWidth}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      <Text
        style={{ ...styles.subtitle, color: darkTheme ? 'white' : 'black' }}
      >
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map((source) => (
          <TouchableOpacity
            onPress={() => setSource(source.id)}
            key={source.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: source.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: '#007fff',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  name: {},
  categoryName: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  sourceImage: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: '40%',
    borderRadius: 10,
    margin: 15,
    backgroundColor: '#cc313d',
  },
})
