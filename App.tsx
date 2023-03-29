import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/Main';
import { Theme } from './src/theme/theme';

export default function App() {
  React.useEffect(() => {
    console.log(new Date().toTimeString() + " App")
  }, [])

  return (
    <PaperProvider theme={Theme}>
      <Main />
    </PaperProvider>
  );
}
