/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute, Route} from '@react-navigation/native';
import {fetchById} from '../../actions/bookId';
import moment from 'moment';
import AddEditBookModal from '../../modals/AddEdditBooks/add-edit-book-modal';
import {BookType} from '../../store/books/types';

const BookId = () => {
  const [book, setBook] = useState<BookType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute<Route<string, {itemId: number}>>();
  console.log(route.params);
  const {itemId} = route.params;
  useEffect(() => {
    fetchById(setBook, itemId);
  }, [itemId]);

  const renderBook = () => {
    return book.map((x) => {
      const readTime = () =>
        moment(x.endReadDate).diff(moment(x.startReadDate), 'days');
      const readingTime = () => moment().diff(moment(x.startReadDate), 'days');
      return (
        <View key={x.id}>
          <View style={styles.title}>
            <Text onPress={() => setModalVisible(true)}>Redaguoti</Text>
          </View>

          <Text>Originalus pav. {x.originalName}</Text>
          <Text style={styles.author}>Autorius {x.author}</Text>
          <Text style={styles.genres}>Žanras {x.genres}</Text>
          <Text style={styles.genres}>Leidykla {x.publishHouse}</Text>
          <Text style={styles.genres}>
            Pirmas leidimas {moment(x.firstEdition).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.genres}>Puslapių skaičius {x.numberOfPages}</Text>
          <Text style={styles.genres}>Aprašymas {x.description}</Text>
          <Text style={styles.genres}>Įvertinimas {x.evaluation}</Text>
          <Text style={styles.genres}>
            Pradėta skaityti {moment(x.startReadDate).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.genres}>
            Baigta skaityti{' '}
            {x.endReadDate !== '0000-00-00 00:00:00'
              ? moment(x.endReadDate).format('YYYY-MM-DD')
              : 'Knyga skaitoma'}
          </Text>
          <View>
            <Text>
              {x.endReadDate !== '0000-00-00 00:00:00'
                ? `Perskaityta per ${readTime()} dienas`
                : `Knyga skaitoma ${readingTime()} dieną`}
            </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View>
      {renderBook()}
      <AddEditBookModal
        book={book}
        setBook={setBook}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        bookId={itemId}
      />
    </View>
  );
};

export default BookId;
const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 22,
    fontWeight: '400',
  },
  author: {},
  genres: {},
});
