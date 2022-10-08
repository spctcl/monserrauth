import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const clientId = "BPQhc6_F24Icw9bK93Bc8__WMPMd9qQgdzVXb5l1Q8xfpibzsai0LAN39HUuzCrTby0EIXchi57mrZqUAIS8aik"

export default function App() {

const appUrl = 'https://localhost:3000';

return (
      <View style={styles.container}>
      <WebView
    
          scalesPageToFit={true} 
          javaScriptEnabled
          source={{
            html: appUrl
          }}
          automaticallyAdjustContentInsets={false}
        />
      <StatusBar style="auto" />
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
