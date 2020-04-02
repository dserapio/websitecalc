import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, FlatList, TextInput } from 'react-native-gesture-handler';

export default function MapScreen() {
    return (
        <View style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.mapText}>
              Using GPS, we will direct you to the nearest 
              accepting e-waste
            </Text>
            <Image
                source={require('../../ewastecoll.JPG')}
                style={styles.mapImage}
            />
            <TextInput
              style={styles.mapText}
              placeholder="Enter in a location"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    contentContainer: {
      paddingTop: 30,
    },
    mapText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },
    mapImage: {
      width: 500,
      height: 400,
      resizeMode: 'stretch',
      marginTop: 3,
      marginLeft: -10,
    },
  });