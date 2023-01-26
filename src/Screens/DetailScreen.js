import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../utils/styleUtil';
import {useFocusEffect} from '@react-navigation/core';

const DetailScreen = ({navigation, route}) => {
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        title: route.params.displayLogin?.toUpperCase(),
      });
    }, [navigation]),
  );

  return (
    <View style={{padding: 10}}>
      <Image
        resizeMode="cover"
        style={{height: 200}}
        source={{uri: route.params.avatar}}
      />
      <Text style={{fontSize: 22, color: Colors.accent}}>
        ID: {route.params.ID}
      </Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
