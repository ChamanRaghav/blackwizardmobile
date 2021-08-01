import React from 'react'
import { View, ImageBackground, StyleSheet, Text } from 'react-native'
import colors from '../config/colors'

function Login() {
    return (
        <ImageBackground
            source={require('../assets/images/blackWizard.jpeg')}
            style={styles.background}
            resizeMode="stretch"
        >
            <View style={styles.buttons}>
                <View style={styles.loginButton} >
                    <Text style={styles.buttonTextStyle}>Login</Text>
                </View>
                <View style={styles.registerButton} >
                    <Text style={styles.buttonTextStyle}>Register</Text>
                </View>
            </View>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    loginButton: {
        backgroundColor: colors.PRIMARY,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    registerButton: {
        backgroundColor: colors.SECONDARY,
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 10
    },
    buttons: {
        top: '17%'
    },
    buttonTextStyle: {
        color: colors.WHITE,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default Login
