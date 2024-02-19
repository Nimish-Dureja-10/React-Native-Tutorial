import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const MutliView = () => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text>View 1</Text>
        </View>
        <View style={styles.center}>
            <Text>View 2</Text>
        </View>
        <View style={styles.bottom}>
            <Text>View 3</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    top : {
        flex : 1,
        backgroundColor: "green"
    },
    center : {
        flex : 2,
        backgroundColor : "blue",
    },
    bottom : {
        flex: 1,
        backgroundColor : "red"
    }
})

export default MutliView