
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import colors from '../theme/colors';

type Props = {
  navigation: any;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.logo}>ROUTE<Text style={styles.logoAccent}>GUARD</Text></Text>

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue your journey.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={colors.muted}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={colors.muted}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('AssignedTrips')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Demo frontend: authentication will be connected to the backend later.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.navy,
    padding: 25,
    paddingTop: 45,
  },
  back: {
    color: colors.mint,
    fontSize: 15,
    marginBottom: 35,
  },
  logo: {
    color: colors.white,
    fontSize: 25,
    fontWeight: '900',
    letterSpacing: 1,
  },
  logoAccent: {
    color: colors.teal,
  },
  title: {
    color: colors.white,
    fontSize: 34,
    fontWeight: '800',
    marginTop: 65,
  },
  subtitle: {
    color: '#A9B9CC',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 40,
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 22,
  },
  label: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 9,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F4F7FA',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 11,
    padding: 15,
    color: colors.text,
    fontSize: 14,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  forgotText: {
    color: colors.teal,
    fontWeight: '700',
    fontSize: 13,
  },
  button: {
    backgroundColor: colors.teal,
    borderRadius: 11,
    padding: 16,
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800',
  },
  note: {
    color: colors.muted,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 18,
    lineHeight: 17,
  },
});
