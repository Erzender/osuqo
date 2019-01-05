import React from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, TextInput, Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';
import mainActions from '../duck/actions';

const styles = {
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
  },
};

const Login = ({
  login,
  notifSetup,
  name,
  password,
  updateFieldName,
  updateFieldPassword,
  createAccount,
  message,
}) => {
  const loginButton = () => login(name, password, notifSetup);
  const createButton = () => createAccount(name, password);
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={updateFieldName}
        placeholder="Character name"
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={updateFieldPassword}
        placeholder="Password"
      />
      <View style={{ marginTop: 10 }}>
        <Button color="#552222" title="Log in" onPress={loginButton} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button color="#552222" title="Create account" onPress={createButton} style={{ flex: 1 }} />
      </View>
      <Text style={{ alignSelf: 'center' }}>{message}</Text>
    </KeyboardAvoidingView>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  notifSetup: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  updateFieldName: PropTypes.func.isRequired,
  updateFieldPassword: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  notifSetup: !state.qo.notificationId,
  name: state.qo.fieldName || '',
  password: state.qo.fieldPassword || '',
  message: state.qo.message || '',
});

const mapDispatchToProps = dispatch => ({
  login: (name, password, notifSetup) => dispatch(mainActions.login(name, password, notifSetup)),
  updateFieldName: name => dispatch(mainActions.updateField('name', name)),
  updateFieldPassword: pw => dispatch(mainActions.updateField('password', pw)),
  createAccount: (name, password) => dispatch(mainActions.signin(name, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
