// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/

const markers = [
  {
    coordinate: {
      latitude: 31.5159952847206,
      longitude: 74.29588949751681,
    },
    title: 'Khaadi Allama Iqbal Town',
    description:
      'Khaadi, Askari Bank, near Pak Block Allama Iqbal Town, Lahore, Punjab, PK',
  },
  {
    coordinate: {
      latitude: 31.544271451583516,
      longitude: 74.38390069751762,
    },
    title: 'Khaadi Askari 1',
    description: 'Khaadi, Grand Trunk Rd, Askari I Askari 1, Mews',
  },
  {
    coordinate: {
      latitude: 31.46767615660313,
      longitude: 74.26536766867966,
    },
    title: 'Khaadi Emporium Mall  ',
    description:
      'Khaadi Emporium Mall, Abdul Haque Road, Trade Centre Commercial Area Phase 2 Johar Town, Lahore, Punjab 54000, Pakistan',
  },

  {
    coordinate: {
      latitude: 31.5314823557382,
      longitude: 74.36630733984546,
    },
    title: 'Khaadi Fortress Square',
    description:
      'Khaadi Fortress Square, Fortress Stadium Circular Road, Saddar Town, Lahore, Lahore Cantt',
  },

  {
    coordinate: {
      latitude: 31.51613719180034,
      longitude: 74.35184229751688,
    },
    title: 'Khaadi Gulberg II',
    description:
      'Khaadi, MM Alam Road, Block B1 Block B 1 Gulberg II, Lahore, Punjab 54660, PK',
  },

  {
    coordinate: {
      latitude: 31.511459309319292,
      longitude: 74.34510135333728,
    },
    title: 'Khaadi Liberty Market',
    description: 'Khaadi, Liberty Market Gulberg III, Lahore',
  },

  {
    coordinate: {
      latitude: 31.47168319743778,
      longitude: 74.35628633984386,
    },
    title: 'Khaadi Walton Road',
    description: 'Khaadi, Walton Road, Nishtar Town, Lahore',
  },
];

import React, {Component} from 'react';
// Import required components
import {SafeAreaView, StyleSheet, View, Image} from 'react-native';
// import { useTheme } from '@react-navigation/native';
// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';

export default class MapView1 extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: 31.520568750000002,
              longitude: 74.3511197982244,
              latitudeDelta: 0.23,
              longitudeDelta: 0.051,
            }}
            customMapStyle={mapStyleRetro}>
            {markers.map((item, idx) => {
              return (
                <MapView.Marker
                  style={styles.markerStyle}
                  key={idx}
                  coordinate={item.coordinate}
                  title={item.title}
                  description={item.description}>
                  <View style={styles.markerViewStyle}>
                    <Image
                      source={require('../../assets/marker4.png')}
                      style={styles.markerImg}
                      resizeMode="contain"
                    />
                  </View>
                </MapView.Marker>
              );
            })}
            {/* 
          <Marker
            draggable
            coordinate={{
              latitude: 31.520568750000002,
              longitude: 74.3511197982244,
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Khaadi Location'}
            description={'Khaadi, commercial, Gulberg, Pakistan'}
          /> */}
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStyleRetro = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  markerStyle: {
    padding: -6,
    height: Platform.OS === 'android' ? 50 : null,
    width: Platform.OS === 'android' ? 45 : null,
  },
  markerViewStyle: {
    height: Platform.OS === 'ios' ? 50 : null,
    width: Platform.OS === 'ios' ? 45 : null,
  },
  markerImg: {
    width: 58,
    height: 42,
  },
});
