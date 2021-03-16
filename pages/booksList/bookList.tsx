/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator
} from 'react-native';
import AddBookModal from '../../modals/AddEdditBooks/add-edit-book-modal';
import { fetchFunction } from '../../actions/bookList';
import DeleteBookModal from '../../modals/AddEdditBooks/delete-modal';
import { BookType } from '../../store/books/types';
import { useFocusEffect } from '@react-navigation/native';
import BookComponent from './components/book'


const BookListPage = () => {
  const [data, setData] = useState<BookType[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      fetchFunction(setData);

      return () => {
      };
    }, [])
  );
  const renderItem = () => {
    if (data) {
      return data.map((item) => {
        return (
          <BookComponent
            key={item.id}
            setDeleteModalVisible={setDeleteModalVisible}
            setSelectedId={setSelectedId}
            item={item}
          />
        );
      });
    }
  };


  return (
    <View style={styles.container}>
      <Button
        onPress={() => setModalVisible(true)}
        title="Pridėti knygą"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {!data ? <ActivityIndicator size="large" color="#00ff00" /> : renderItem()}
      <AddBookModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setData={setData}
        data={data}
      />
      <DeleteBookModal
        setDeleteModalVisible={setDeleteModalVisible}
        deleteModalVisible={deleteModalVisible}
        setData={setData}
        data={data}
        selectedId={selectedId}
      />
    </View>
  );
};



export default BookListPage;
const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    width: '70%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    color: 'white',
    padding: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  expandedItem: {
    backgroundColor: '#7c8a9c',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  itemView: {
    backgroundColor: '#2b5181',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 5,
  },
  deleteBtn: {
    color: 'white',
    backgroundColor: '#da4b5e',
    padding: 5,
  },
  viewBtn: {
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
  },
  activeStatus: {
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  notActiveStatus: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
});
