import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
const Signup = () => {
    const [form , setForm]  = useState ({
        name :" ",
        password:" ",
        email:""
    })
    return (
<ScrollView className="flex-1  bg-green-100">
    <View className="flex-1">
        <View className="relative w-full h-[275px]">
            <Image source={images.signUpCar} className=" p-10 z-0 w-full h-[250px]"/>
            <Text className="text-2xl bottom-7 left-5  text-black font-JakartaSemiBold">Create your Account</Text>

        </View>
    </View>
    {/* cusdtom component */}
<InputField label= "Name" placeholder = "Enter Your Name" icons = {icons.person } values = {form.name} onChangeText = {(value : string) =>{
    setForm({...form , name : value})
}} />


</ScrollView>
    );
};
export default Signup;