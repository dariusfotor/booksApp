/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { deleteBook } from '../../actions/bookList';

const DeleteBookModal = (props: any) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.deleteModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setDeleteModalVisible(!props.deleteModalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Ar tikrai ištrinti?</Text>
            <View style={styles.actionButtons}>
              <Pressable
              style={[styles.button, styles.buttonClose]}
                onPress={() =>
                  props.setDeleteModalVisible(!props.deleteModalVisible)
                }>
                <Text style={styles.textStyle}>Atšaukti</Text>
              </Pressable>
              <Pressable
              style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  props.setData(
                    props.data.filter(
                      (book: any) => book.id !== props.selectedId,
                    ),
                  );
                  deleteBook(props.selectedId);
                  props.setDeleteModalVisible(!props.deleteModalVisible);
                }}>
                <Text style={styles.textStyle}>Taip</Text>
              </Pressable>
            </View>
          </View>
        </View>
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
  actionButtons: {
    width: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  saveCancelBtn: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default DeleteBookModal;
