/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchBtn}
        onPress={() => navigation.navigate('BooksList')}>
        <Text style={styles.btnTxt}>Knygų sąrašas</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  touchBtn: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#c45118',
    marginVertical: 10,
  },
  btnTxt: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginTop: 5,
    alignSelf: 'center',
    color: 'white',
  },
});
