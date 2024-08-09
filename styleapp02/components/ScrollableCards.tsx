import React from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native'

function ScrollableCards(): JSX.Element {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.headingText}>Scroll Cards</Text>
            </View>
            <ScrollView horizontal={true}>

                <View style={styles.container}>
                    <View style={[styles.cards, styles.redCard]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.cards, styles.greenCard]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.cards, styles.blueCard]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.cards, styles.redCard]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.cards, styles.greenCard]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.cards, styles.blueCard]}>
                        <Text>Blue</Text>
                    </View><View style={[styles.cards, styles.redCard]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.cards, styles.greenCard]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.cards, styles.blueCard]}>
                        <Text>Blue</Text>
                    </View>
                    <View style={[styles.cards, styles.redCard]}>
                        <Text>Red</Text>
                    </View>
                    <View style={[styles.cards, styles.greenCard]}>
                        <Text>Green</Text>
                    </View>
                    <View style={[styles.cards, styles.blueCard]}>
                        <Text>Blue</Text>
                    </View>
                </View>
            </ScrollView>
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
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    cards: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        width: 100,
        height: 100,
        borderRadius: 5
    },
    redCard: {
        backgroundColor: '#f54260'
    },
    greenCard: {
        backgroundColor: '#42f58d'
    },
    blueCard: {
        backgroundColor: '#4287f5'
    }
})

export default ScrollableCards