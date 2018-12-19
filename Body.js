import React, { Component } from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.tareas}
          renderItem={({ item }) => <Tarea item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#00ff00',
  },
});

export default Body;
