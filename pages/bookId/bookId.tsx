/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useRoute, Route} from '@react-navigation/native';
import {fetchById} from '../../actions/bookId';
import moment from 'moment';
import AddEditBookModal from '../../modals/AddEdditBooks/add-edit-book-modal';
import CheckBookDone from '../../modals/CheckDoneBook/check-done-book-modal';
import {BookType} from '../../store/books/types';
import {Card, Button, Rating} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';

const BookId = () => {
  const [book, setBook] = useState<BookType[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkDoneModalVisible, setCheckDoneModalVisible] = useState(false);
  const route = useRoute<Route<string, {itemId: number}>>();
  const {itemId} = route.params;
  useFocusEffect(
    React.useCallback(() => {
      fetchById(setBook, itemId);

      return () => {};
    }, [itemId]),
  );

  const renderBook = () => {
    return book.map(x => {
      const readTime = () =>
        moment(x.endReadDate).diff(moment(x.startReadDate), 'days');
      const readingTime = () => moment().diff(moment(x.startReadDate), 'days');
      return (
        <Card key={x.id}>
          <View style={styles.editButton}>
            {x.endReadDate === '0000-00-00 00:00:00' ? (
              <Button
                onPress={() => setCheckDoneModalVisible(true)}
                title="Žymėti perskaitytą"
                type="outline"
              />
            ) : null}
            <Button
              onPress={() => setModalVisible(true)}
              title="Redaguoti"
              type="outline"
            />
          </View>
          <Card.Title style={styles.title}>{x.name}</Card.Title>
          <Text style={styles.paragraph}>
            Originalus pav.: {x.originalName}
          </Text>
          <Text style={styles.paragraph}>Autorius: {x.author}</Text>
          <Text style={styles.paragraph}>Žanras: {x.genres}</Text>
          <Text style={styles.paragraph}>Leidykla {x.publishHouse}</Text>
          <Text style={styles.paragraph}>
            Pirmas leidimas: {moment(x.firstEdition).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.paragraph}>
            Puslapių skaičius: {x.numberOfPages}
          </Text>
          <Text style={styles.paragraph}>Aprašymas: {x.description}</Text>
          <Text style={styles.paragraph}>Įvertinimas</Text>
          <Rating
            showRating
            fractions={1}
            startingValue={x.evaluation}
          />

          <Text style={styles.paragraph}>
            Pradėta skaityti: {moment(x.startReadDate).format('YYYY-MM-DD')}
          </Text>
          <Text style={styles.paragraph}>
            Baigta skaityti:{' '}
            {x.endReadDate !== '0000-00-00 00:00:00'
              ? moment(x.endReadDate).format('YYYY-MM-DD')
              : 'Knyga skaitoma'}
          </Text>
          <View>
            <Text style={styles.paragraph}>
              {x.endReadDate !== '0000-00-00 00:00:00'
                ? `Perskaityta per: ${readTime()} dienas`
                : `Knyga skaitoma:  ${readingTime()} dieną`}
            </Text>
          </View>
        </Card>
      );
    });
  };

  return (
    <ScrollView>
      <View>
        {renderBook()}
        <AddEditBookModal
          book={book}
          setBook={setBook}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          bookId={itemId}
        />
        <CheckBookDone
          bookId={itemId}
          setBook={setBook}
          setCheckDoneModalVisible={setCheckDoneModalVisible}
          checkDoneModalVisible={checkDoneModalVisible}
        />
      </View>
    </ScrollView>
  );
};

export default BookId;
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 15,
  },
  editButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 22,
    fontWeight: '400',
  },
  paragraph: {
    margin: 8,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
