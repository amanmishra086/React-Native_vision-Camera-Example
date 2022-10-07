import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React from 'react';
import type { Routes } from './Routes';

type Props = NativeStackScreenProps<Routes, 'PermissionsPage'>;

export default function ScannerOrPicture({ navigation }) {
  const onPressButton1 = () => {
    navigation.replace('VisionCamera');
  };
  const onPressButton2 = () => {
    navigation.replace('CameraPage');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressButton1}>
        <Text>Scanner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onPressButton2}>
        <Text>picture/video</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 20,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
