/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  View,
  Button,
} from 'react-native';
import {Formik} from 'formik';
import {createBook} from '../../actions/bookList';
import {updateBook} from '../../actions/bookId';
import * as ImagePicker from 'react-native-image-picker';
import {BookType} from '../../store/books/types';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';
import {Icon, Slider} from 'react-native-elements';

interface Props {
  book?: BookType[];
  setBook?: (arg: BookType[]) => void;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  setData?: (arg: any) => void;
  data?: BookType[];
  bookId?: number;
}

const Form: React.FC<Props> = props => {
  return (
    <Formik
      initialValues={
        !props.book
          ? {
              name: '',
              description: '',
              createdAt: new Date(),
              firstEdition: null,
              startReadDate: null,
              endReadDate: null,
              photo: '',
              evaluation: 0,
              numberOfPages: 0,
              originalName: '',
              author: '',
              genres: '',
              publishHouse: '',
            }
          : {
              id: props.book[0].id,
              name: props.book[0].name,
              description: props.book[0].description,
              firstEdition:
                props.book[0].firstEdition !== '0000-00-00 00:00:00'
                  ? moment(props.book[0].firstEdition).format('YYYY-MM-DD')
                  : null,
              startReadDate:
                props.book[0].startReadDate !== '0000-00-00 00:00:00'
                  ? moment(props.book[0].startReadDate).format('YYYY-MM-DD')
                  : null,
              endReadDate:
                props.book[0].endReadDate !== '0000-00-00 00:00:00'
                  ? moment(props.book[0].endReadDate).format('YYYY-MM-DD')
                  : null,
              photo: props.book[0].photo,
              evaluation: props.book[0].evaluation,
              numberOfPages: props.book[0].numberOfPages,
              originalName: props.book[0].originalName,
              author: props.book[0].author,
              genres: props.book[0].genres,
              publishHouse: props.book[0].publishHouse,
            }
      }
      onSubmit={values => {
        if (props.book && props.setBook && props.book) {
          props.setBook([values]);
          props.setModalVisible(!props.modalVisible);
          updateBook(values, props.bookId);
        } else if (!props.book && props.setData && props.data) {
          props.setData([...props.data, values]);
          props.setModalVisible(!props.modalVisible);
          createBook(values);
        }
      }}>
      {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
        <View>
          <View>
            <Text style={styles.label}>Pavadinimas</Text>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Originalus pavadinimas</Text>
            <TextInput
              onChangeText={handleChange('originalName')}
              onBlur={handleBlur('originalName')}
              value={values.originalName}
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Autorius</Text>
            <TextInput
              onChangeText={handleChange('author')}
              onBlur={handleBlur('author')}
              value={values.author}
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Žanras</Text>
            <TextInput
              onChangeText={handleChange('genres')}
              onBlur={handleBlur('genres')}
              value={values.genres}
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Leidykla</Text>
            <TextInput
              onChangeText={handleChange('publishHouse')}
              onBlur={handleBlur('publishHouse')}
              value={values.publishHouse}
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Pirmas leidimas</Text>
            <DatePicker
              style={{width: 200}}
              date={values.firstEdition?.toString()}
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
              onDateChange={(date: any) => setFieldValue('firstEdition', date)}
            />
          </View>
          <View>
            <Text style={styles.label}>Puslapių skaičius</Text>
            <TextInput
              onChangeText={handleChange('numberOfPages')}
              onBlur={handleBlur('numberOfPages')}
              value={
                values.numberOfPages ? values.numberOfPages.toString() : ''
              }
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Aprašymas</Text>
            <TextInput
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              style={styles.inputs}
            />
          </View>
          <View>
            <Text style={styles.label}>Pradėta skaityti</Text>
            <DatePicker
              style={{width: 200}}
              date={values.startReadDate?.toString()}
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
              onDateChange={(date: any) => setFieldValue('startReadDate', date)}
            />
          </View>
          <View>
            <Text style={styles.label}>Pabaigta skaityti</Text>
            <DatePicker
              style={{width: 200}}
              date={values.endReadDate?.toString()}
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
          <View>
            <Button
              onPress={() =>
                ImagePicker.launchImageLibrary(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    maxHeight: 200,
                    maxWidth: 200,
                  },
                  response => {
                    setFieldValue('photo', response);
                  },
                )
              }
              title="Pasirinkti foto"
            />
          </View>
          <View >
            <Text style={styles.label}>Įvertinimas</Text>
            <Slider
              value={values.evaluation}
              onValueChange={(e: any) => setFieldValue('evaluation', e)}
              maximumValue={5}
              minimumValue={0}
              step={1}
              trackStyle={{height: 10, backgroundColor: 'transparent'}}
              thumbStyle={{
                height: 20,
                width: 20,
                backgroundColor: 'transparent',
              }}
              thumbProps={{
                children: (
                  <Icon
                    name="heartbeat"
                    type="font-awesome"
                    size={12}
                    reverse
                    containerStyle={{bottom: 10, right: 20}}
                    color="#f50"
                  />
                ),
              }}
            />
            <TextInput
              editable={false}
              value={values.evaluation ? values.evaluation.toString() : ''}
              style={styles.inputs}
            />
          </View>
          <View style={styles.saveCancelBtn}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!props.modalVisible)}>
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
  label: {
    fontSize: 16,
    
  },
});
