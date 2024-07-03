import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Product from '../Components/Product'
import Header from '../Components/Header'

const products = [
    { id: 1, name: "Office Wear", type: "reversible angora cardigan", price: 120, image: require('../assets/dress1.png'), description: "Office wear for you office" },
    { id: 2, name: "Black", type: "reversible angora cardigan", price: 120, image: require('../assets/dress2.png'), description: "Recycle Boucle Knit Cardigan Black" },
    { id: 3, name: "Church Wear", type: "reversible angora cardigan", price: 120, image: require('../assets/dress3.png'), description: "Recycle Boucle Knit Cardigan Pink" },
    { id: 4, name: "Lamerei", type: "reversible angora cardigan", price: 120, image: require('../assets/dress4.png'), description: "Recycle Boucle Knit Cardigan Pink" },
    { id: 5, name: "21WN", type: "reversible angora cardigan", price: 120, image: require('../assets/dress5.png'), description: "Recycle Boucle Knit Cardigan Pink" },
    { id: 6, name: "Lopo", type: "reversible angora cardigan", price: 120, image: require('../assets/dress6.png'), description: "Recycle Boucle Knit Cardigan Pink" },
    { id: 7, name: "21WN", type: "reversible angora cardigan", price: 120, image: require('../assets/dress7.png'), description: "Recycle Boucle Knit Cardigan Pink" },
    { id: 8, name: "Lame", type: "reversible angora cardigan", price: 120, image: require('../assets/dress1.png'), description: "Recycle Boucle Knit Cardigan Pink" },
]

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>OUR STORY</Text>
                <View style={styles.subHeaderRight}>
                    <View style={styles.subHeaderRightContainer}>
                        <Image source={require('../assets/Listview.png')} />
                    </View>
                    <View style={styles.subHeaderRightContainer}>
                        <Image source={require('../assets/Filter.png')} />
                    </View>
                </View>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <Product product={item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ gap: 15 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 25
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    subHeaderText: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
        letterSpacing: 4
    },
    subHeaderRight: {
        flexDirection: 'row',
        gap: 10
    },
    subHeaderRightContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#f3f3f3',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Home
