import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { listItems } from '../data';

function ListScreen() {
  return (
    <View style={styles.view}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={listItems}
        renderItem={({ item }) => {
          return <Text style={styles.listItem}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  list: {
    width: '100%',
  },
  listItem: {
    marginBottom: 20,
    fontSize: 20,
  },
});

export default ListScreen;
