import React from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'

const CartItem = ({ product }) => {
  return (
    <View>
        <Image 
        source={product.image}
        />
        <View>
            <Text>{product.name}</Text>
            <Text>{product.description}</Text>
            <Text>{product.price}</Text>
            <Pressable>
                <Image 
                source={require('../assets/remove.png')}
                />
            </Pressable>
        </View>
    </View>
  )
}

export default CartItem
