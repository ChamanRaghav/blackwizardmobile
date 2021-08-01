import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import colors from '../config/colors'

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode="center"
                source={require('../assets/images/blackWizard.jpeg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colors.PRIMARY,
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.BLACK,
        flex: 1
    },
    deleteIcon: {
        backgroundColor: colors.SECONDARY,
        width: 50,
        height: 50,
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen
