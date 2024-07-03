import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Header from '../Components/Header'

const Checkout = () => {
    return (
        <View style={styles.container}>
            <Header showMenu={false} showShoppingBag={false}/>
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>CHECKOUT</Text>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                    <Image source={require('../assets/diamond.png')}
                        style={styles.diamond}
                    />
                </View>
            </View>


            <View>
                <View>
                    <Text>EST. TOTAL</Text>
                    <Text>Total</Text>
                </View>
                <View>
                    <Image />
                    <Text>CHECKOUT</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 35
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    subHeader: {
        alignItems: 'center',
        marginTop: 20
    },
    subHeaderText: {
        fontSize: 24,
        fontFamily: 'New Times Roman',
        letterSpacing: 3
    },
    lineContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        backgroundColor: '#c3c3c3',
        height: 1,
        width: 120
    },
    diamond: {
        width: 24,
        height:24,
        position: 'absolute',
        backfaceVisibility: 'hidden',
        
        // zIndex: 10
    }
})

export default Checkout
