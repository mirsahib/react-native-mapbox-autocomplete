import MapboxAutocomplete from './src/MapboxAutocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
export default function App() {
  return (
    <SafeAreaView>
      <MapboxAutocomplete/>
    </SafeAreaView>
  );
}
