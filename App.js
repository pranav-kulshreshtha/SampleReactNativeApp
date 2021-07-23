import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

import UpdateCard from './components/UpdateCard';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function StudentDataUpdater(){
  const [name, updateName] = useState('N/A');
  const [previousName, alterPrevious] = useState('N/A');
  const [newName, alterNew] = useState('');

  const inputFunction = (text)=>alterNew(text);
  const update = ()=>{
              alterPrevious(name);
              updateName(newName);
            };

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>Student Data Updater</Text>
          <Text style={styles.subtitle}>Using Functional Components</Text>
        </View>
        <View>
  
          <UpdateCard previousName={previousName}  name={name} changeTextMethod={inputFunction}
              onPressMethod={update} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ebe134',
    padding: 8,
  },
  top: {
    backgroundColor: '#fff200',
    margin: 5,
  },
  title: {
    margin: 5,
    fontSize: 24,
    color: '#731919',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Helvetica',
  },
  subtitle: {
    margin: 5,
    fontSize: 17,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});