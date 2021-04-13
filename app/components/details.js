import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

import NavigationBar from './navigationBar';

//Este es el componente details
export default class Details extends Component {
    //Aquí renderizamos la vista con los detalles del item seleccionado
    render() {
        //Recibimos los parámetros pasados por React-Navigation
        //En este caso, estaríamos recibiendo el ItemObject
        const {params} = this.props.route;
        return ( 
            <View>
                <NavigationBar navigate={params.navigateObject} />
                <View  style={styles.item}>
                    <Text style={styles.title}>{params.itemObject.title}</Text>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={{uri:params.itemObject.small_cover_image}} style={{height: 200, width: 200, textAlignt: 'center'}} />
                    </View>
                    <Text style={styles.summary}>{params.itemObject.summary}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    summary: {
        fontSize: 20,
    },
});