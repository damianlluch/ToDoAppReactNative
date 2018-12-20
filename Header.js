import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          onChangeText={this.props.cambiarTexto}
          placeholder="Escribi tu texto aca..."
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#98FB98',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});

export default Header;
