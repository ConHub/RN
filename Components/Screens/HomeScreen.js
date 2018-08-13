import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {createStackNavigator} from 'react-navigation'


let background = {
    uri : 'https://media.giphy.com/media/ZPn7MRr2evCak/giphy.gif'
}

class HomeScreen extends React.Component {

    static navigationOptions = {
      header: null
        
    };

    render() {
        return (
            <View style={styles.container}>
                <Image source={background} style={{height: '100%', width: '100%'}} />
                
                    <View style={{position: 'absolute', bottom: '40%'}}>
                        <Button onPress={ () => this.props.navigation.navigate('BottomNavigator') } title="ENTER" />
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

});

export default HomeScreen;