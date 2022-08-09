import MapboxAutocomplete from './src/MapboxAutocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import {MAPBOX_API_KEY} from './apikey'



export default function App() {
  return (
    <SafeAreaView>
      <MapboxAutocomplete apiKey={MAPBOX_API_KEY} country='us'/>
    </SafeAreaView>
  );
}
