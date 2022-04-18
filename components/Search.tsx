import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../api/Context'
import { Entypo } from '@expo/vector-icons'
import SingleNews from './SingleNews'

export default function Search() {
  const {
    news: { articles },
    darkTheme,
  } = useContext(NewsContext)

  const [searchResult, setSearchResult] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [currentNews, setCurrentNews] = useState<any>()

  const handleModal = (n: any) => {
    setModalVisible(true)
    setCurrentNews(n)
  }

  const handleSearchText = (text: string) => {
    if (!text) {
      setSearchResult([])
      return
    }

    setSearchResult(articles.filter((query: any) => query.title.includes(text)))
  }

  return (
    <View style={{ width: '100%', position: 'relative' }}>
      <TextInput
        style={{
          ...styles.Search,
          backgroundColor: darkTheme ? 'black' : '#e6e6e6',
          color: darkTheme ? 'white' : 'black',
        }}
        onChangeText={(newText) => handleSearchText(newText)}
        placeholder="Search for news"
        placeholderTextColor={darkTheme ? 'white' : 'black'}
      />

      <View style={styles.searchResults}>
        {searchResult.slice(0, 10).map((n: any) => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            onPress={() => handleModal(n)}
          >
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: darkTheme ? 'black' : '#f7f7f7',
                color: darkTheme ? 'white' : 'black',
              }}
            >
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{ position: 'relative', zIndex: 1, right: 0, margin: 20 }}
        >
          <Entypo
            name="circle-with-cross"
            size={30}
            color={darkTheme ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <View style={{ height: '100%' }}>
          <SingleNews item={currentNews} index={0} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  Search: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
})
