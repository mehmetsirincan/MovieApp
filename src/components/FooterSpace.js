import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FooterSpace() {
  const insets = useSafeAreaInsets();
  const height = parseInt(100)+parseInt(insets.top);
  return (
    <View style={{height}} />
  )
}