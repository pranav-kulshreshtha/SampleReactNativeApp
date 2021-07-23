import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';

import { Card } from 'react-native-paper';

export default function UpdateCard(props) {
  return (
    <View style={styles.container}>
      <Card style={styles.updateCard}>

          <View style={{flexDirection: 'row', justifyContent: 'center'}} >
            <Text
              style={{
                fontSize: 16,
                color: 'blue',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Arial',
              }}>PREVIOUS NAME :  </Text>
            <Text style={{fontWeight:'bold'}} >{props.previousName}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', margin:10}} >
            <Text
              style={{
                fontSize: 16,
                color: 'orange',
                fontWeight: 'bold',
                textAlign: 'center',
                fontFamily: 'Arial',
              }}>UPDATED NAME :  </Text>
            <Text style={{fontWeight:'bold'}}>{props.name}</Text>
            </View>

            <Text style={{marginLeft: 20}} >Enter new name : </Text>
            <TextInput style={styles.input} onChangeText={props.changeTextMethod} />
            <Button title="Update"  onPress={props.onPressMethod} />

          </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  updateCard: {
    padding: 30,
    marginHorizontal: 14,
  },
  input: {
    margin: 20,
    marginTop: 8,
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderWidth: 1
  }
});
