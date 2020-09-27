/**
 * Bui Thai Hoang - 17520502
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


const App = () => {
  const [mssv, setMssv] = useState('')
  const [password, setPassword] = useState('')
  const [capcha, setCapcha] = useState('')

  const onLogin = () => {
    if (!mssv || !password || !capcha) {
      return alert("please fill all !!!")
    }
    if (capcha !== 789) {
      return alert("capcha wrong")
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.logo}>
          <Text style={styles.textLogo}>Logo</Text>
        </View>
        <View style={styles.sectionInput}>
          <Text style={styles.label}>MSSV:</Text>
          <TextInput
            placeholder='MSSV'
            style={styles.textInput}
            onChange={(text) => setMssv(text)}
          />
        </View>
        <View style={styles.sectionInput}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            placeholder='Passowrd'
            style={styles.textInput}
            textContentType="password"
            secureTextEntry
            onChange={(text) => setPassword(text)}

          />
        </View>
        <View style={styles.sectionInput}>
          <Text>Capcha: 789</Text>
          <TextInput
            placeholder='Type something'
            style={styles.textInput}
            onChange={(text) => setCapcha(text)}

          />
        </View>
        <View style={styles.sectionButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={onLogin}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',

  },
  sectionInput: {
    // paddingVertical: 20,
    marginVertical: 20,
    width: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  },
  sectionButton: {
    backgroundColor: '#215092',
    paddingVertical: 10,
    marginVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 20
  },
  button: {},
  logo: {
    padding: 30
  },
  textLogo: {
    fontSize: 30
  },
  textInput: {
    paddingVertical: 10,
  },

});

export default App;
