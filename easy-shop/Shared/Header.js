import React from "react"
import { StyleSheet, Image, SafeAreaView, View } from "react-native"

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/appicone.png")}
                resizeMode="contain"
                style={{ height: 50 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor:'#9efd38',
        top:30,
        height:90
        
        
    }
})

export default Header;