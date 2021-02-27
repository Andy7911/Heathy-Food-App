import React from 'react'
import { View, Text } from 'react-native'

export default function Desert({ navigation: { goBack } }) {
    return (
        <View>
            <Text onPress={()=>goBack()}> This desert View Return </Text>
        </View>
    )
}

