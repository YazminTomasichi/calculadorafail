import React from "react";
import {Text, View } from "react-native";
import Boton from '../components/ButtonHome'

const Home = ({ navigation }) => {
    return (
        <View>
            <Boton text= 'ir a calcu' onPress = { () => { navigation.navigate ('Calcu')} } />
        </View>
    )
}

export default Home