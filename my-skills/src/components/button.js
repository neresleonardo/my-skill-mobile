import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function Button({ onPrass }) {
    return(
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPrass}
      >
          <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
       backgroundColor: '#ee7bfa',
       marginTop: 10,
       borderRadius: 15,
       padding: 8,
       alignItems: 'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },

  });