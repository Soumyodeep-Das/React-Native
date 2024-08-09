import React from 'react';

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return(
        <View style={Style.container}>
            <Text style={isDarkMode ? Style.lightText : Style.darkText}>
                Hello World
            </Text>
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lightText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro