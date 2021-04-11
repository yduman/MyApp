import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface ImageDetailProps {
  title: string;
  src: ImageSourcePropType;
}

function ImageDetail(props: ImageDetailProps) {
  const { title, src } = props;

  return (
    <View>
      <Image source={src} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageDetail;
