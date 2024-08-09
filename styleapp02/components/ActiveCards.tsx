import React from "react";
import { Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function ActiveCards(): JSX.Element {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
        <SafeAreaView>
            <Text style={styles.headingText}>Active Cards</Text>
            <View style={styles.card}>
                <View style={styles.cardHeadingView}>
                    <Text style={styles.cardHeading}>Ep 23: Java Functions</Text>
                </View>
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.cardImage} />
                <Text style={styles.cardDescription}>In this video we have discussed about all the basics of Functions or Methods in Java Programming Language</Text>
                <View style={styles.clickButnView}>
                    <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/images')}>
                        <Text style={styles.clickButn}>Watch Video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/docs/')}>
                        <Text style={styles.clickButn}>Read Article</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headingText: {
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    card: {
        margin: 10,
        paddingBottom: 30,
        borderRadius: 10,
        backgroundColor: 'lightgrey'
    },
    cardHeadingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeading: {
        //borderRadius: 10,
        fontSize: 25,
        fontWeight: 'bold',
        paddingLeft: 10
        //backgroundColor: 'green'
    },
    cardImage: {
        height: 300
    },
    cardDescription: {
        fontWeight: 'bold',
        padding: 10
    },
    clickButnView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    clickButn: {
        width: 120,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 5,
        fontWeight: 'bold',
        fontSize: 17,
        paddingTop: 3,
        paddingHorizontal: 12
    }
})

export default ActiveCards