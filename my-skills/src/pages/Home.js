
import React, { useState } from 'react'
import { 
            StyleSheet,
            Text, 
            TextInput, 
            View, 
            TouchableOpacity
        } from 'react-native';

export default function App() {

  const [newSkill, setNewSkill ] = useState('');
  const [mySkills, setMySkills] = useState([]); // vetor

  function handleNewAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  // Sempre que a gente for lidar com ações do usuário e bom usar o handle
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo, Leonardo!</Text>
      <TextInput
            style={styles.input}
            placeholder="Nova skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleNewAddNewSkill}
      >
          <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginTop:40}]}>
        My Skills
      </Text>
     { 
      mySkills.map(skill => (
        <TouchableOpacity 
          style={styles.buttonSkill}
          activeOpacity={0.7}
          key={skill}
        >
            <Text style={styles.textSkill}>
              {skill}
            </Text>
        </TouchableOpacity>
      ))
     }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1423',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
      backgroundColor: '#1f1e25',
      color:  '#fff',
      fontSize: 18,
      padding: 8,
      marginTop: 20,
      borderRadius: 15,
  },
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