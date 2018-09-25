import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  static propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };
  static defaultProps = {
    placeholder: '',
  };

  handleChangeInput = text => {
    this.setState({ input: text });
  };


 handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({ text: '' });
  };

  render() {
    //https://facebook.github.io/react-native/docs/textinput
    //const { input } = this.state;
    //const { placeholder } = this.props;
    const input = this.state.input;
    const placeholder = this.props.placeholder;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.handleChangeInput}
          value={input}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          clearButtonMode="always"
          autoCorrect={false}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#666',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  },
});