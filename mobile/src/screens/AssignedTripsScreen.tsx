
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

export default function AssignedTripsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* RouteGuard Header */}
        <Text style={styles.logo}>ROUTEGUARD</Text>

        <Text style={styles.heading}>Assigned trips</Text>

        <Text style={styles.subtitle}>
          Your scheduled and active journeys
        </Text>

        {/* Driver Status */}
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>ON DUTY</Text>
        </View>

        {/* Section Heading */}
        <Text style={styles.sectionLabel}>
          TODAY • ASSIGNED BY DISPATCH
        </Text>

        {/* Upcoming Trip */}
        <View style={styles.tripCard}>
          <View style={styles.nextBadge}>
            <Text style={styles.nextText}>UP NEXT</Text>
          </View>

          <Text style={styles.tripId}>TRIP-0248</Text>

          <Text style={styles.route}>
            Depot 01 → North District
          </Text>

          <Text style={styles.tripInfo}>
            10:30 AM • 18 km
          </Text>

          {/* Trip Details Button */}
          <TouchableOpacity
            style={styles.cardButton}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('TripDetails')}
          >
            <Text style={styles.cardButtonText}>
              View trip details
            </Text>
          </TouchableOpacity>
        </View>

        {/* Second Scheduled Trip */}
        <View style={styles.tripCard}>
          <Text style={styles.tripId}>TRIP-0251</Text>

          <Text style={styles.route}>
            North District → Central Depot
          </Text>

          <Text style={styles.tripInfo}>
            Scheduled
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        {/* Trips */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
        >
          <Text style={[styles.navIcon, styles.activeNav]}>
            ⌂
          </Text>

          <Text style={[styles.navText, styles.activeNav]}>
            Trips
          </Text>
        </TouchableOpacity>

        {/* History */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('TripHistory')}
        >
          <Text style={styles.navIcon}>◉</Text>
          <Text style={styles.navText}>History</Text>
        </TouchableOpacity>

        {/* Alerts */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('OfficerUpdates')}
        >
          <Text style={styles.navIcon}>♧</Text>
          <Text style={styles.navText}>Alerts</Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          style={styles.navItem}
          activeOpacity={0.7}
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

  sectionLabel: {
    color: '#61758C',
    fontSize: 10,
    fontWeight: '700',
    marginTop: 19,
    marginBottom: 10,
  },

  tripCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 15,
    minHeight: 107,
    marginBottom: 12,
    justifyContent: 'center',
  },

  nextBadge: {
    backgroundColor: '#DDF5F1',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 9,
  },

  nextText: {
    color: colors.teal,
    fontSize: 9,
    fontWeight: '800',
  },

  tripId: {
    color: colors.navy,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 6,
  },

  route: {
    color: '#35475D',
    fontSize: 12,
    marginBottom: 8,
  },

  tripInfo: {
    color: '#71849B',
    fontSize: 11,
  },

  cardButton: {
    backgroundColor: colors.teal,
    borderRadius: 9,
    paddingVertical: 11,
    alignItems: 'center',
    marginTop: 13,
  },

  cardButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
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
