import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  Form,
  StyleSheet
} from 'react-native';

class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Espace Membre',
    };
  
    render() {
      return (
          <View style={styles.container}>
                <Text style={styles.header}>Pseudo</Text>
              <Button title="Connexion" ></Button>
        </View>
      );
    }

}
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    }
  });

  export default SignInScreen