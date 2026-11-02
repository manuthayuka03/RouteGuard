
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';

import colors from '../theme/colors';

type Props = {
  navigation: any;
};

export default function TripDetailsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.logo}>ROUTEGUARD</Text>

        <Text style={styles.heading}>Trip details</Text>

        <Text style={styles.subtitle}>
          Review assignment before starting
        </Text>

        {/* Assignment Status */}
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>ASSIGNED</Text>
        </View>

        {/* Trip Information Card */}
        <View style={styles.tripCard}>
          <Text style={styles.tripId}>TRIP-0248</Text>

          <Text style={styles.tripTime}>
            Today • 10:30 AM
          </Text>

          <Text style={styles.distance}>
            Estimated distance: 18 km
          </Text>
        </View>

        {/* Start Location */}
        <View style={styles.locationCard}>
          <Text style={styles.locationLabel}>
            START LOCATION
          </Text>

          <Text style={styles.locationName}>
            Depot 01
          </Text>
        </View>

        {/* Destination */}
        <View style={styles.locationCard}>
          <Text style={styles.locationLabel}>
            DESTINATION
          </Text>

          <Text style={styles.locationName}>
            North District
          </Text>
        </View>

        {/* Start Trip Button */}
        <TouchableOpacity
          style={styles.startButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('ActiveNavigation')}
        >
          <Text style={styles.startButtonText}>
            Start trip
          </Text>
        </TouchableOpacity>

        {/* Navigation Information */}
        <Text style={styles.navigationNote}>
          Google Maps navigation after start
        </Text>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('AssignedTrips')}
        >
          <Text style={[styles.navIcon, styles.activeNav]}>⌂</Text>
          <Text style={[styles.navText, styles.activeNav]}>
            Trips
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('TripHistory')}
        >
          <Text style={styles.navIcon}>◉</Text>
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('OfficerUpdates')}
        >
          <Text style={styles.navIcon}>♧</Text>
          <Text style={styles.navText}>Alerts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('DriverProfile')}
        >
          <Text style={styles.navIcon}>●</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F0F6F9',
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 25,
  },

  logo: {
    color: colors.teal,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 8,
  },

  heading: {
    color: colors.navy,
    fontSize: 25,
    fontWeight: '800',
  },

  subtitle: {
    color: colors.navy,
    fontSize: 13,
    fontWeight: '600',
    marginTop: 3,
  },

  statusBadge: {
    backgroundColor: '#DDF5F1',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 16,
  },

  statusText: {
    color: colors.teal,
    fontSize: 10,
    fontWeight: '800',
  },

  tripCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
    height: 91,
    justifyContent: 'center',
    marginTop: 13,
    marginBottom: 18,
  },

  tripId: {
    color: colors.navy,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
  },

  tripTime: {
    color: '#71849B',
    fontSize: 11,
    marginBottom: 8,
  },

  distance: {
    color: '#35475D',
    fontSize: 11,
  },

  locationCard: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 15,
    height: 54,
    justifyContent: 'center',
    marginBottom: 12,
  },

  locationLabel: {
    color: '#71849B',
    fontSize: 9,
    fontWeight: '600',
    marginBottom: 6,
  },

  locationName: {
    color: colors.navy,
    fontSize: 13,
    fontWeight: '700',
  },

  startButton: {
    backgroundColor: colors.teal,
    borderRadius: 12,
    height: 39,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginTop: 16,
  },

  startButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
  },

  navigationNote: {
    color: '#71849B',
    fontSize: 10,
    marginTop: 12,
    marginLeft: 6,
  },

  bottomNav: {
    height: 58,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#DFE8ED',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    fontSize: 17,
    color: '#74869B',
    marginBottom: 2,
  },

  navText: {
    fontSize: 9,
    color: '#74869B',
  },

  activeNav: {
    color: colors.teal,
    fontWeight: '800',
  },

});
