import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './CartContext';
import Home from './Screens/Home';
import Checkout from './Screens/Checkout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Checkout" 
            component={Checkout} 
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
