
import React, { useState, useEffect } from 'react'
import { 
            StyleSheet,
            Text, 
            TextInput, 
            View, 
            FlatList, // Lidar melhor com listas grandes
            ScrollView,
        } from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/skillCard'

interface SkillDate {
  id: string;
  name: string;
}

export default function App() {
  const [newSkill, setNewSkill ] = useState(''); // Armazena um estado
  const [mySkills, setMySkills] = useState<SkillDate[]>([]); // vetor
  const [greetings, setGreetings] = useState('')

  function handleNewAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
  }
  // Sempre que a gente for lidar com açõers do usuário e bom usar o handle
 
  useEffect(() => {
    const currentHours =  new Date().getHours();

    if(currentHours < 12) {
      setGreetings('Bom Dia');
    } 
    else if(currentHours >= 12 && currentHours < 18){
      setGreetings('Boa Tarde');
    } 
    else {
      setGreetings('Boa Noite');
    }
  }, [])
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo, Leonardo!</Text>
      <Text style={styles.greetings}>
        {greetings}
      </Text>
      <TextInput
            style={styles.input}
            placeholder="Nova skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
      />
      <Button 
        onPress={handleNewAddNewSkill} 
        title="Adicionar" 
      />
      
      <Text style={[styles.title, { marginTop:40}]}>
        My Skills
      </Text>
      <FlatList 
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <SkillCard skill={item.name}/>
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
  greetings: {
    color:  '#ccc',
  }
  
});