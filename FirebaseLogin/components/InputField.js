import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput} from 'react-native';
import {w, h, totalSize} from '../api/Dimensions';

const close = require('../assets/close.png');

export default class InputField extends Component {
  state = {
    text: ''
  };

  getInputValue = () => this.state.text;

  render() {
    return (
      <View style={[styles.container, this.props.style, this.props.error ? styles.containerError : {}]}>
        <Image style={styles.icon} source={this.props.icon}/>
        <TextInput
          style={styles.inputText}
          value={this.state.text}
          selectionColor="white"
          autoCapitalize={this.props.autoCapitalize}
          ref={ref => this.input = ref}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          secureTextEntry={this.props.secureTextEntry}
          blurOnSubmit={this.props.blurOnSubmit}
          keyboardType={this.props.keyboardType}
          returnKeyType={this.props.returnKeyType}
          placeholder={this.props.placeholder}
          onSubmitEditing={this.props.focus(this.props.placeholder)}
          placeholderTextColor="#ffffffDD"
          onChangeText={(text) => this.setState({ text })}
        />
        {this.props.error && <Image style={styles.iconError} source={close}/>}
      </View>
    );
  }
}

InputField.defaultProps = {
  focus: () => {},
  style: {},
  placeholder: '',
  blurOnSubmit: false,
  returnKeyType: 'next',
  error: false,
  keyboardType: null,
  secureTextEntry: false,
  autoCapitalize: "none",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff44',
    flexDirection: 'row',
    paddingVertical: w(3.4),
    borderRadius: w(10),
    borderColor: '#ddd',
    borderWidth: 1,
    width: '85%',
  },
  containerError: {
    backgroundColor: '#EF9A9A88',
    borderWidth: 1,
    borderColor: '#E57373',
  },
  inputText: {
    color: 'white',
    flex: 1,
    fontSize: totalSize(2.1),
    marginLeft: w(3),
  },
  icon: {
    marginLeft: w(4),
    width: w(7),
    height: w(7),
  },
  iconError: {
    width: w(7),
    height: w(7),
    marginRight: w(3),
  },
});
