import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.item.texto}</Text>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  texto: {
    fontSize: 24,
  },
});

export default Tarea;
