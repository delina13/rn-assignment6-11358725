import React, { useContext } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { CartContext } from '../CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
        <View>
            <Image source={product.image}/>
            <Pressable 
              style={styles.plusContainer}
              onPress={() => addToCart(product)}
            >
                <Image source={require('../assets/add_circle.png')}/>
            </Pressable>
        </View>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.type}>{product.type}</Text>
        <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    plusContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    name: {
        fontSize: 20,
        marginTop: 5,
        fontFamily: 'Times New Roman'
    },
    type: {
        fontSize: 15,
        marginBottom: 5,
        marginTop: 3,
        fontFamily: 'Times New Roman'
    },
    price: {
        fontSize: 20,
        color: 'red',
        marginBottom: 10,
        fontFamily: 'Times New Roman'
    }
})

export default Product;
