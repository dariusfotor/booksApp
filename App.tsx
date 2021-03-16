/* eslint-disable prettier/prettier */
import React from 'react';
import HomePage from './pages/home/homePage';
import BooksList from './pages/booksList/bookList';
import BookId from './pages/bookId/bookId';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: 'Knygų kampelis'}}
        />
        <Stack.Screen
          name="BooksList"
          component={BooksList}
          options={{title: 'Knygų sąrašas'}}
        />
        <Stack.Screen
          name="BookId"
          component={BookId}
          options={{title: 'Knyga'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
