import React from 'react';
import { StatusBar } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

function WebViewRender() {
  const route = useRoute();
  const url = route.params.url;

  return (
    <>
      <StatusBar hidden />
      <WebView style={{ flex: 1 }} source={{ uri: url }}></WebView>
    </>
  );
}

export default WebViewRender;
