import React from 'react';
import {
        TouchableOpacity,
        TouchableOpacityProps,
        Text,
        StyleSheet
       } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        {...rest}
      >
          <Text style={styles.buttonText}>
            { title}
          </Text>
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