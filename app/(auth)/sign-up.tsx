import { images } from "@/constants";
import { View, Text, ScrollView, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
const Signup = () => {
    return (
<ScrollView className="flex-1 bg-white">
    <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
            <Image source={images.signUpCar} className="z-0 w-full h-[250px]"/>
            <Text className="text-2xl text-black font-JakartaSemiBold">Create your Account</Text>

        </View>
    </View>

</ScrollView>
    );
};
export default Signup;