import React from "react";
import {Text, View } from "react-native";

export default function Maris() {
  return (
    <View style={styles.container}>
      <Text>Mariana Zanoni da Silva</Text>
      <Text>1° Prova DDM lado B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
