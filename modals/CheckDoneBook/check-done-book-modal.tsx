/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Modal, StyleSheet, Text, View, ScrollView} from 'react-native';
import Form from './form';
import { BookType } from '../../store/books/types'

interface Props {
  setCheckDoneModalVisible: (arg: boolean) => void;
  checkDoneModalVisible: boolean;
  bookId: number;
  setBook?: (arg: BookType[]) => void;
}

const CheckBookDone: React.FC<Props> = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.checkDoneModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setCheckDoneModalVisible(!props.checkDoneModalVisible);
        }}>
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                <Form
                  checkDoneModalVisible={props.checkDoneModalVisible}
                  setCheckDoneModalVisible={props.setCheckDoneModalVisible}
                  bookId={props.bookId}
                  setBook={props.setBook}
                />
              </Text>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  saveCancelBtn: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CheckBookDone;
