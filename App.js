import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import images from './images';

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>

      <ScrollView style={styles.scroller}>
        <Text style={styles.title}>Galerie de Photos</Text>
        <View style={styles.grid}>
          {images.map((image, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={image} style={styles.image} />
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    width: '45%', // Ajustez la largeur selon vos besoins
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
});
