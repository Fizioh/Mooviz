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
              <View style={styles.form}>
                <Text style={styles.header}>Pseudo</Text>

                <TextInput
                  style={styles.input}
                  placeholder=" Entrez votre identifiant"

                />
                <Text style={styles.header}>Mot de passe</Text>

                <TextInput
                  style={styles.input}
                  placeholder=" Entrez votre mot de passe"
                  keyboardType="numeric"
                />
                <Text style={styles.inscription}>Pas encore inscrit ? <Text style={styles.bluetext}>Inscrivez-vous</Text> </Text>
                </View>
              <Button color="#3CE0CC" title="Connexion" ></Button>
        </View>
      );
    }

}
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: 'black',
    },
    form: {
      marginBottom: 30
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      color: 'white',
      margin: 15,
      fontWeight: 'bold'
    },
    input: {
      height: 40,
      margin: 10,
      paddingBottom: 10,
      borderWidth: 1,
      borderColor: "#3CE0CC",
      opacity: 0.5,
      borderRadius: 15
    },
    inscription: {
      color: 'grey'
    },
    bluetext: {
      color: "#3CE0CC",
    }
  });

  export default SignInScreen