import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function DetailsScreen() {
  return (
    <View style={styles.details}>
      <Text>Details Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
