import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
const onSignUpPress = async () => {

}


const Signup = () => {
    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter()

    const [verification,setVerification] = useState({
        state : "default",
        error  : "",
        code :''
    })
    const [form, setForm] = useState({
        name: " ",
        password: " ",
        email: ""
    })

    const onSignUpPress = async () => {
        if (!isLoaded) {
            return
        }

        try {
            await signUp.create({
            emailAddress : form.email,
             password : form.password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
            setVerification({...verification,state : "pending"})
        } catch (err: any) {

            console.error(JSON.stringify(err, null, 2))
        }
    }

    const onPressVerify = async () => {
        if (!isLoaded) {
            return
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            })

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                router.replace('/')
            } else {
                console.error(JSON.stringify(completeSignUp, null, 2))
            }
        } catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2))
        }
    }



    return (
        <ScrollView className="flex-1  bg-green-100">
            <View className="flex-1">
                <View className="relative w-full h-[275px]">
                    <Image source={images.signUpCar} className=" p-10 z-0 w-full h-[250px]" />
                    <Text className="text-2xl bottom-7 left-5  text-black font-JakartaSemiBold">Create your Account</Text>

                </View>
            </View>
            {/* cusdtom component */}
            <InputField label="Name" placeholder="Enter Your Name" icon={icons.person} value={form.name} onChangeText={(value: string) => {
                setForm({ ...form, name: value })
            }} />
            <InputField label="Email" placeholder="Enter Your Email" icon={icons.email} value={form.email} onChangeText={(value: string) => {
                setForm({ ...form, email: value })
            }} />
            <InputField label="Password" placeholder="Enter Your Password" icon={icons.lock} secureTextEntry={true} value={form.password} onChangeText={(value: string) => {
                setForm({ ...form, password: value })
            }} />

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} className="bg-red-100 mx-4">
                <CustomButton title="Sign-Up" onPress={onSignUpPress} className="mt-6" />
                {/* oAuth  */}
                <OAuth/>
                <Link href={"/(auth)/sign-in"} className=" text-lg text-center text-general-200 mt-10">
                    <Text >Already have an account ?</Text>
                    <Text className="text-primary-500">Log In</Text>
                </Link>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};
export default Signup;