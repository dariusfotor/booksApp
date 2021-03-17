import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {Formik} from 'formik';
import {updateBookEndReadDate} from '../../actions/bookId';
import DatePicker from 'react-native-datepicker';
import {BookType} from '../../store/books/types';

interface Props {
  bookId: number;
  setCheckDoneModalVisible: (arg: boolean) => void;
  checkDoneModalVisible: boolean;
  setBook?: (arg: BookType[]) => void;
}

const Form: React.FC<Props> = props => {
  return (
    <Formik
      initialValues={{endReadDate: ''}}
      onSubmit={values => {
        if (props.setBook && values) {
          //   props.setBook([values]);
          props.setCheckDoneModalVisible(!props.checkDoneModalVisible);
          updateBookEndReadDate(values, props.bookId);
        }
      }}>
      {({
        values,
        handleSubmit,
        setFieldValue,
        /* and other goodies */
      }) => (
        <View>
          <View>
            <Text>Pabaigta skaityti</Text>
            <DatePicker
              style={{width: 200}}
              date={values.endReadDate}
              mode="date"
              placeholder="pasirinkite datą"
              format="YYYY-MM-DD"
              confirmBtnText="Patvirtinti"
              cancelBtnText="Atšaukti"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={(date: any) => setFieldValue('endReadDate', date)}
            />
          </View>
          <View style={styles.saveCancelBtn}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                props.setCheckDoneModalVisible(!props.checkDoneModalVisible)
              }>
              <Text style={styles.textStyle}>Atšaukti</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => handleSubmit()}>
              <Text style={styles.textStyle}>Išsaugoti</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({
  saveCancelBtn: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
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
  inputs: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
  },
});
