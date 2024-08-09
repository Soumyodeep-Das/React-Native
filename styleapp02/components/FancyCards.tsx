import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

function FancyCards(): JSX.Element {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>Fancy Cards</Text>
            </View>
            <View style={styles.container}>
                <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                    style={styles.cardImage} />
                <View style={styles.cardText}>
                    <Text style={styles.cardHeading}>React-Native</Text>
                    <Text style={styles.cardDescription}>Framework to Build Seemless Mobile Applications</Text>
                    <Text style={styles.cardDetails}>This Andriod Application too build with React-Native</Text>
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
    container: {
        marginHorizontal: 10,
        paddingBottom: 40,
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
    cardHeading: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    cardDescription: {
        fontWeight: 'bold',
        color: 'grey'
    },
    cardDetails: {
        fontWeight: 'bold',
        color: 'grey'
    },
    cardImage: {
        height: 300,
        borderRadius: 10
    },
    cardText: {
        padding: 10
    }
})

export default FancyCards