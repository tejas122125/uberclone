import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
const onSignInPress = async () => {

}


const Signin = () => {
    const [form, setForm] = useState({
        password: "",
        email: ""
    })
    return (
        <ScrollView className="flex-1  bg-green-100">
            <View className="flex-1">
                <View className="relative w-full h-[275px]">
                    <Image source={images.signUpCar} className=" p-10 z-0 w-full h-[250px]" />
                    <Text className="text-2xl bottom-7 left-5  text-black font-JakartaSemiBold">Welcome</Text>

                </View>
            </View>
            {/* cusdtom component */}

            <InputField label="Email" placeholder="Enter Your Email" icon={icons.email} value={form.email} onChangeText={(value: string) => {
                setForm({ ...form, email: value })
            }} />
            <InputField label="Password" placeholder="Enter Your Password" icon={icons.lock} secureTextEntry={true} value={form.password} onChangeText={(value: string) => {
                setForm({ ...form, password: value })
            }} />

  
                <CustomButton title="Sign-Up" onPress={onSignInPress} className="mt-6" />
                {/* oAuth  */}
                <OAuth/>
                <Link href={"/(auth)/sign-up"} className=" text-lg text-center text-general-200 mt-10">
                    <Text> Don't have an account ? </Text>
                    <Text className="text-primary-500"> Sign Up </Text>
                </Link>
        </ScrollView>
    );
};
export default Signin;