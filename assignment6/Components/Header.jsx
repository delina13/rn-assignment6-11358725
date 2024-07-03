import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = ({ showMenu = true }) => {
  return (
    <View style={styles.header}>
      {showMenu ? (
        <Image source={require('../assets/Menu.png')} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <Image source={require('../assets/Logo.png')} />
      <View>
        <Image source={require('../assets/shoppingBag.png')} />
        <Image source={require('../assets/Search.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  placeholder: {
    width: 24, 
    height: 24, 
    opacity: 0, 
  },
});

export default Header;
