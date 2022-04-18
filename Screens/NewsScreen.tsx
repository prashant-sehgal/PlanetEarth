import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../api/Context'
import Carousel from 'react-native-snap-carousel'
import SingleNews from '../components/SingleNews'

export default function NewsScreen() {
  const {
    news: { articles },
  } = useContext(NewsContext)

  const [activeIndex, setActiveIndex] = useState<number>()

  const windowHeight = Dimensions.get('window').height

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          layout={'stack'}
          data={articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={(props) => (
            <SingleNews item={Object(props.item)} index={props.index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'black',
    // transform: [{ scaleY: -1 }],
  },
})
