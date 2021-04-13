import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

//Componente NavigationBar
//Básicamente, un layout que brinda la barra de navegación
export default function NavigationBar({navigate}) {
    return(
        <View style={styles.topBar}>
            <TouchableOpacity onPress={()=>{navigate('Login')}}>
                <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Home_Icon.svg/768px-Home_Icon.svg.png'}} style={{height: 40, width: 40 }} />
            </TouchableOpacity>
            <Text style={{color:'white',textAlign: 'center',textAlignVertical: 'center',fontSize:20}}>Movies</Text>
            <Image source={{uri:'https://planet.neeo.com/media/download/k9xpv3/1280px-star_movies_logo-svg.png'}} style={{height: 40, width: 80 }} />
        </View>
    )
}

const styles = StyleSheet.create({  
    topBar: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
    },
});