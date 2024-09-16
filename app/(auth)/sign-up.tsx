import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from "react-native"
import ReactNativeModal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";
const onSignUpPress = async () => {

}


const Signup = () => {
    const { isLoaded, signUp, setActive } = useSignUp()
    const router = useRouter()

    const [verification, setVerification] = useState({
        state: "pending",
        error: "",
        code: ''
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
                emailAddress: form.email,
                password: form.password,
            })

            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
            setVerification({ ...verification, state: "pending" })
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
                code: verification.code,
            })

            if (completeSignUp.status === 'complete') {
                await setActive({ session: completeSignUp.createdSessionId })
                //create a new user in our database 

                setVerification({ ...verification, state: "success" })
                router.replace('/')
            } else {
                setVerification({ ...verification, error: "verification failed", state: "failed" })
                console.error(JSON.stringify(completeSignUp, null, 2))
            }
        } catch (err: any) {
            setVerification({ ...verification, error: err.errors[0].longMessage })
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
                <View className="p-5">
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
                    {/* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"} className="bg-red-100 mx-4"> */}
                    <CustomButton title="Sign-Up" onPress={onSignUpPress} className="mt-6" />
                    {/* oAuth  */}
                    <OAuth />
                    <Link href={"/(auth)/sign-in"} className=" text-lg text-center text-general-200 mt-10">
                        <Text >Already have an account ?</Text>
                        <Text className="text-primary-500">Log In</Text>
                    </Link>
                </View>

                {/* </KeyboardAvoidingView> */}

                {/* verification modal  */}
                <ReactNativeModal onModalHide={()=>{
                    setVerification({...verification,state:"success"})
                }}    isVisible={verification.state === 'pending'}>
                    <View className="px-7 py-9 bg-white rounded-2xl minh-[300px]">
                        <Text className="text-2xl font-JakartaBold mb-2">Verification</Text>
                        <Text className="font-Jakarta mb-5">
                            we have sent you a verification code
                        </Text>
                        <InputField label="Code" icon={icons.lock} placeholder="12345" value={verification.code} keyboardType="numeric" onChangeText={(code)=>{
                            setVerification({...verification,code:code})
                        }}/>

                        {verification.error && (<Text className="text-red-500 text-sm mt-1">{verification.error}</Text>)                        
                        }

                        <CustomButton title="Verify Email" className="mt-5 bg-success-500" onPress={onPressVerify}/>

                    </View>
                </ReactNativeModal>

                <ReactNativeModal isVisible={verification.state === 'success'}>
                    <View className="bg-white px-7 py-9 rounded-2xl min-h-[300px]">
                        <Image source={images.check} className=" w-[110px] h-[110px] my-5  mx-auto " />
                        <Text className="text-3xl font-JakartaBold text-center">Verified</Text>
                        <Text className="text-base text-gray-500  font-Jakarta text-center">You have successfully verified your account</Text>
                        <CustomButton title="Browse Home " onPress={() => { return router.replace("/(root)/(tabs)/home") }} className="mt-5" />
                    </View>
                </ReactNativeModal>

            </View>
        </ScrollView>
    );
};
export default Signup;