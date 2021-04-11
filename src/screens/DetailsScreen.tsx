import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

function DetailsScreen() {
  return (
    <View style={styles.details}>
      <ImageDetail
        title="Landscape 1"
        src={require('../../assets/landscape1.jpeg')}
      />
      <ImageDetail
        title="Landscape 2"
        src={require('../../assets/landscape2.jpeg')}
      />
      <ImageDetail
        title="Landscape 3"
        src={require('../../assets/landscape3.jpeg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default DetailsScreen;
