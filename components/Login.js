import React from 'react'
import { View, Image, Text, StatusBar, TouchableHighlight, TouchableOpacity } from 'react-native'
import Images from '../assets/images'

function Login() {
    return (
        <View style={{
            flex: 1
        }}>
            <Image
                source={require('../assets/images/blackWizard.jpeg')}
                style={{ width: '100%', height: '100%', top: StatusBar.currentHeight, flex: 9 }}
                resizeMode="contain"
            />
            <View
                style={{
                    backgroundColor: 'grey',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <TouchableOpacity>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                    >Login</Text>
                </TouchableOpacity>
            </View>
            <View
                style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <TouchableOpacity>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold'
                        }}
                    >Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login
