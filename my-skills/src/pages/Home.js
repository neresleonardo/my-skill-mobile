
import React, { useState } from 'react'
import { 
            StyleSheet,
            Text, 
            TextInput, 
            View, 
            FlatList, // Lidar melhor com listas grandes
            ScrollView
        } from 'react-native';

import { Button } from '../components/button';
import { SkillCard } from '../components/skillCard'
export default function App() {

  const [newSkill, setNewSkill ] = useState(''); // Armazena um estado
  const [mySkills, setMySkills] = useState([]); // vetor

  function handleNewAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }
  // Sempre que a gente for lidar com açõers do usuário e bom usar o handle
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo, Leonardo!</Text>
      <TextInput
            style={styles.input}
            placeholder="Nova skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
      />
      <Button onPrass={handleNewAddNewSkill} />
      
      <Text style={[styles.title, { marginTop:40}]}>
        My Skills
      </Text>
      <FlatList 
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <SkillCard skill={item}/>
          )}
      />
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
  
});