import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BookType} from '../../../store/books/types';
import {Card, Button, Badge} from 'react-native-elements';

interface Props {
  setDeleteModalVisible: (arg: boolean) => void;
  item: BookType;
  setSelectedId: (arg: number | undefined) => void;
}

const BookComponent: React.FC<Props> = props => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, width: '100%'}}>
      <Card key={props.item.id}>
        <Badge
          containerStyle={{position: 'absolute', top: -4, right: -4}}
          status={
            props.item.endReadDate === '0000-00-00 00:00:00'
              ? 'success'
              : 'error'
          }
        />
        <Card.Title style={styles.title}>{props.item.name}</Card.Title>
        <View style={styles.buttons}>
          <Button
            onPress={() => {
              navigation.navigate('BookId', {itemId: props.item.id});
            }}
            title="Peržiūrėti"
            buttonStyle={{backgroundColor: '#1d9127'}}
          />
          <Button
            buttonStyle={{backgroundColor: '#a83232'}}
            onPress={() => {
              props.setSelectedId(props.item.id);
              props.setDeleteModalVisible(true);
            }}
            title="Ištrinti"
          />
        </View>
      </Card>
    </View>
  );
};

export default BookComponent;
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
