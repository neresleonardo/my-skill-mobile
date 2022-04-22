import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard() {
    return(
    <TouchableOpacity style={styles.buttonSkill} key='1'>
        <Text style={styles.textSkill}>
            skill
        </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        borderRadius: 8,
        backgroundColor: '#1f1e25',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
      },
      textSkill: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });