import React from 'react';
import {View, Text, Button, Alert} from 'react-native';


let profileBackground = {
    uri : ''
}

class ProfileScreen extends React.Component {
    


    _onPress() {
        Alert.alert('U TAPPED ME')
    }

    render() {
        return (
            <View style={{backgroundColor: 'red', height: '100%', width: '100%'}}>
                <Button title="PRESS ME" onPress={this._onPress} color='red'/>
                
            </View>
        )
    }
}

export default ProfileScreen;