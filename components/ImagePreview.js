import React from 'react'
import { View, Image, StatusBar } from 'react-native'

function ImagePreview() {
    return (
        <View
            style={{ top: 5, flex: 1, justifyContent: 'space-between' }}
        >
            <View
                style={{
                    flex: 0.5
                }}
            />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <View
                    style={{
                        backgroundColor: 'tomato',
                        width: 50,
                        height: 50
                    }}
                >
                </View>
                <View
                    style={{
                        backgroundColor: 'grey',
                        width: 50,
                        height: 50
                    }}
                >
                </View>
            </View>
            <View
                style={{
                    flex: 0.5
                }}
            />
            <View style={{ flex: 12 }}>
                <Image
                    source={require('../assets/images/blackWizard.jpeg')}
                    style={{ width: '100%', height: '100%' }}
                />
            </View>
            <View
                style={{
                    flex: 0.5
                }}
            />
        </View>
    )
}

export default ImagePreview
