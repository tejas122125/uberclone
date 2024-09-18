import { Text, View } from "react-native";
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'
const Map = () => {

    return (

        <MapView provider={PROVIDER_DEFAULT} className="w-full h-full " tintColor="black" mapType="mutedStandard" showsPointsOfInterest={false} showsUserLocation={true} userInterfaceStyle="light">

        </MapView>
   

    );


}

export default Map;