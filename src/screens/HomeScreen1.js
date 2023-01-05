/* eslint-disable prettier/prettier */
import { View, ImageBackground, Text, StyleSheet, FlatList } from 'react-native'

import React from 'react';

// const image = { uri: "https://i.pinimg.com/564x/55/43/e6/5543e6c4fd479bb9e7c49d746421ca41.jpg" };

export default function HomeScreen() {
    const tempArray = [
        { quotation: 'hellow world' },
        // { quotation: 'hellow world 11qqwqwqsdsdddsdsdcdssdd' },
        // { quotation: 'hellow world' },
    ];
    const renderquotation = ({ item, index }) => (
        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            <Text>{item.quotation}</Text>
        </View>
    );
    return (

        <View style={styles.container}>
            <FlatList
                data={tempArray}
                horizontal
                //  pagingEnabled={true}
                //  showsHorizontalScrollIndicator={false}
                // legacyImplementation={false}
                // data={this.props.quotation}
                renderItem={renderquotation}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
    },

    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
});