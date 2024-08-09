import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

function ContactCards(): JSX.Element {

    const contacts = [
        {
            uid: 1,
            name: 'Soumyodeep Das 1',
            details: 'Learning React-Native 1',
            imageUrl: 'https://reactjs.org/logo-og.png',
        },
        {
            uid: 2,
            name: 'Soumyodeep Das 2',
            details: 'Learning React-Native 2',
            imageUrl: 'https://reactjs.org/logo-og.png',
        },
        {
            uid: 3,
            name: 'Soumyodeep Das 3',
            details: 'Learning React-Native 3',
            imageUrl: 'https://reactjs.org/logo-og.png',
        },
        {
            uid: 4,
            name: 'Soumyodeep Das 4',
            details: 'Learning React-Native 4',
            imageUrl: 'https://reactjs.org/logo-og.png',
        },
    ];

    return (
        <SafeAreaView>
            <ScrollView style={styles.container} scrollEnabled={false}>
                <View>
                    <Text style={styles.headingText}>Contact List Card</Text>
                </View>
                {contacts.map(({ uid, name, details, imageUrl }) => (
                    <View key={uid} style={styles.iterativeCards}>

                        <View style={styles.iterativeCardImages}>
                            <Image
                                source={{
                                    uri: imageUrl
                                }}
                                style={styles.imageCard}
                            />
                        </View>
                        <View style={styles.iterativeCardTexts}>
                            <Text style={styles.names}>{name}</Text>
                            <Text style={styles.details}>{details}</Text>
                        </View>
                    </View>
                ))}


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {},
    headingText: {
        paddingLeft: 10,
        paddingTop: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageCard: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    iterativeCards: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 2,
        backgroundColor: '#DAE0E2',
        borderRadius: 10
    },
    iterativeCardImages: {},
    iterativeCardTexts: {
        marginLeft: 20,
        marginTop: 8
    },
    names: {
        fontSize: 20,
        fontWeight: 'condensedBold'
    },
    details: {}
})

export default ContactCards