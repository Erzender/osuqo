import React from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, TextInput, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import mainActions from '../duck/actions';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
  },
};

const Login = ({ login, name, password, updateFieldName, updateFieldPassword }) => {
  const loginButton = () => login(name, password);
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <Text>Character Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={updateFieldName} />
      <Text>Password</Text>
      <TextInput
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={updateFieldPassword}
      />
      <Button title="Log in" onPress={loginButton} />
    </KeyboardAvoidingView>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateFieldName: PropTypes.func.isRequired,
  updateFieldPassword: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: state.qo.fieldName || '',
  password: state.qo.fieldPassword || '',
});

const mapDispatchToProps = dispatch => ({
  login: (name, password) => dispatch(mainActions.login(name, password)),
  updateFieldName: name => dispatch(mainActions.updateField('name', name)),
  updateFieldPassword: pw => dispatch(mainActions.updateField('password', pw)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
