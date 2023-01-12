import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const FindDriverScreen = () => {
  const [search, setSearch] = useState('');

  const onSearch = (address) => {
    setSearch(address);
  };

  return (
    <View>
     <Text>Book</Text>
    </View>
  );
};

export default FindDriverScreen;
