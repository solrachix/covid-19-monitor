import React from 'react';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

function WebViewRender() {
  const route = useRoute();
  const url = route.params.url;

  return <WebView style={{ flex: 1 }} source={{ uri: url }}></WebView>;
}

export default WebViewRender;
