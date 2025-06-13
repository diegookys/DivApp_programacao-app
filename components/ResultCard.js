import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ResultCard({label, valor}){
  return(
    <View style={styles.container}>
      <Text style={styles.resultado}>{label}</Text>
      <Text style={styles.valor}>R$ {valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    alignItems: 'center',
  },
  resultado:{
    fontSize: 20,
    color: '#ccc',
    marginBottom: 8,
  },
  valor:{
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});