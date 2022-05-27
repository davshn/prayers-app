import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from "react-native";

import RootNavigator from './src/navigation/RootNavigator';
import { store, persistor } from './src/stateManagement/store';

export default function App() {
  LogBox.ignoreLogs(["EventEmitter.removeListener"]);
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <StatusBar style="auto" />
          <RootNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}