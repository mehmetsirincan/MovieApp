import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import Navigator from './src/Navigator';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NativeBaseProvider } from "native-base";

import store from './src/redux/store'
import { Provider } from 'react-redux';

export default function App() {

  const scheme = useColorScheme();

  const MyTheme = {
    colors: {
      background: scheme === 'dark' ? '#1C1A29' : '#F5F5F5',
      card: scheme === 'dark' ? '#1C1A29' : '#F5F5F5'
    },
  }
  
  return (
    <SafeAreaProvider>
       <NativeBaseProvider>
          <SafeAreaView style={{flex:1,position:'relative'}}>
          <Provider store={store}>
          <NavigationContainer theme={MyTheme}>
              <Navigator />
          </NavigationContainer>
          </Provider>
          </SafeAreaView>
        </NativeBaseProvider>
    </SafeAreaProvider>
  );
}