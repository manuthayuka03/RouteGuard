
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import colors from '../theme/colors';

type Props = {
  navigation: any;
};

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>ROUTE<Text style={styles.logoAccent}>GUARD</Text></Text>
        <Text style={styles.tagline}>SMART LOGISTICS • SAFER JOURNEYS</Text>
      </View>

      <View style={styles.hero}>
        <ImageBackground
          source={{ uri: '/driver-hero.png' }}
          style={styles.heroImage}
          imageStyle={styles.imageStyle}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Every Journey,</Text>
        <Text style={styles.headingAccent}>Under Control.</Text>

        <Text style={styles.description}>
          Your journey starts here. Manage assigned trips, stay connected
          with control officers, and travel safely with RouteGuard.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>POWERING SAFER LOGISTICS</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.navy,
    paddingHorizontal: 22,
    paddingTop: 35,
    paddingBottom: 25,
  },
  header: {
    marginBottom: 20,
  },
  logo: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 1,
  },
  logoAccent: {
    color: colors.teal,
  },
  tagline: {
    color: '#A9B9CC',
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 5,
  },
  hero: {
    height: 270,
    width: '100%',
    overflow: 'hidden',
    borderRadius: 22,
    marginBottom: 28,
  },
  heroImage: {
    flex: 1,
    width: '100%',
  },
  imageStyle: {
    borderRadius: 22,
  },
  content: {
    flex: 1,
  },
  heading: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '800',
  },
  headingAccent: {
    color: colors.teal,
    fontSize: 36,
    fontWeight: '800',
  },
  description: {
    color: '#B7C4D3',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: colors.teal,
    paddingVertical: 17,
    borderRadius: 13,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
  },
  footer: {
    textAlign: 'center',
    color: '#71849A',
    fontSize: 9,
    letterSpacing: 2,
    marginTop: 22,
  },
});
