import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

import NavigationBar from './navigationBar';

//Componente Item
function Item({title,image}) {
    return (
        <View style={styles.item}>
            <Image source={{uri:image}} style={{height: 60, width: 60, borderRadius: 400/ 2, }} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

//Este componente se encarga de listar los items que obtenemos de la API
export default class ConexionFetch extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        //Esta es la API de la que sacamos la lista
        await fetch('https://yts.mx/api/v2/list_movies.json')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result.data.movies);
                    this.setState({
                        items:result.data.movies,
                    });
                },
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
    }
    //Aquí renderizamos la lista
    render() {
        //Aquí inicializamos la variable navigate, la cual es necesaria para usar React-Navigate
        //Está variable está señalando a la dirección de navigegación de este componente
        const {navigate} = this.props.navigation;

        return (

            <View style={styles.container}>
                <NavigationBar navigate={navigate} />
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items:[]}
                    renderItem={({item}) => {
                        return(
                            //Utilizamos el componente Item para modelar los elementos de la lista
                            /*El ToucheOpacity nos permite darle la funcionalidad de selección para
                            mostrar una nueva visa; o sea, un botón que reaciona cuando se toca el item*/
                            /*Le estoy diciendo que me mande a la vista realizada por el componente "Navigate"
                            con los parámetros del item, como su nombre, resumen, imagen, etc*/
                            <TouchableOpacity onPress={() => navigate('Details', {itemObject: item,navigateObject:navigate})}>
                                <Item title={item.title} image={item.small_cover_image} navigation={this.props.navigation}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                    navigation={this.props.navigation}
                />
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
        flexDirection:'row',
        padding: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    title: {
        paddingLeft: 10,
        fontSize: 20,
    },
});