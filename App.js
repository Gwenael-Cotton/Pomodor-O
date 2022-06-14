import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Stack } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DataProvider } from './contexts/dataContext';

import Timer from './components/Timer/Timer';
import Settings from './components/Settings/Settings';
import History from './components/History/History';
import Footer from './components/Footer/Footer';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
        <NavigationContainer>
          <DataProvider>
            <Stack.Navigator initialRouteName="Timer">
              <Stack.Screen name="Timer" component={Timer} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="History" component={History} />    
            </Stack.Navigator>
          </DataProvider>
          <Footer />
          <StatusBar style="auto" />
        </NavigationContainer>
    </NativeBaseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
