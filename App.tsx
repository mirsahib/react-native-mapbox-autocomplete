import MapboxAutocomplete from './src/MapboxAutocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import {MAPBOX_API_KEY} from './apikey'



export default function App() {

  const getPlaceName = (place_name: string)=>{
    console.log(place_name)
  }

  return (
    <SafeAreaView>
      <MapboxAutocomplete apiKey={MAPBOX_API_KEY} country='BD' onPress={getPlaceName}/>
    </SafeAreaView>
  );
}
