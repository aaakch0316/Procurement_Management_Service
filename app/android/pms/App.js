import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Text } from 'react-native';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {};
  if (!ready) {
    return (
      <AppLoading 
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  } 
  return <Text>We are done loading.</Text>;
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
