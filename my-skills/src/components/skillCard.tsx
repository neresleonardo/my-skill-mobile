import React from 'react';
import {TouchableOpacity,TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface CardProps extends TouchableOpacityProps {
    skill: string
  }

export function SkillCard({skill}: CardProps) {
    return(
                <TouchableOpacity style={styles.buttonSkill} >
                    <Text style={styles.textSkill}>
                        {skill}
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