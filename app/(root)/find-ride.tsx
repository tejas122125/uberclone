import CustomButton from "@/components/CustomButton";
import GoogleTextInput from "@/components/GoogleTextInput";
import RideLayout from "@/components/RideLayout";
import { icons } from "@/constants";
import { useLocationStore } from "@/store";
import { router } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const FindRide = () => {
    const { userAddress, destinationAddress, setDestinationLocation, setUserLocation } = useLocationStore();
    return (

        <RideLayout title="Ride" snappoints ={['85%']}>
            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>

                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={userAddress!}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="#f5f5f5"
                    fakeHandlePress={() => { console.log("doing fake handle press to set user locatio");}
                    }
                />
            </View>

            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>

                <GoogleTextInput
                    icon={icons.map}
                    initialLocation={destinationAddress!}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="transparent"
                    fakeHandlePress={() => { console.log("doing fake handle press to set user locatio"); }
                    }
                />
            </View>

            <CustomButton
                title="Find Now"
                onPress={() =>{ 
                    console.log("testing    ");
                    
                    router.push('/(root)/confirm-ride')}}
                className="mt-5"
            />
        </RideLayout>
    )
}

export default FindRide;