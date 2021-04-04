import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
