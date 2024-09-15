import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
const Onboarding = () => {
    const swiperRef = useRef<Swiper>(null);
    const [index, setIndexValue] = useState(0);
    return (
        <SafeAreaView className="flex h-full w-full bg-pink-400 flex-col justify-center items-center">
            <TouchableOpacity onPress={() => {
                router.replace("/(auth)/sign-in")
            }} className="bg-blue-300 w-full flex justify-end items-end p-5">
                <Text className="text-black text-base font-JakartaBold">Skip</Text>
            </TouchableOpacity>
           
            <Swiper className="bg-green-300" ref={swiperRef} loop={false} dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(index) => { setIndexValue(index) }}>
                    {onboarding.map((item) =>
                    {
                        return (
                            <View key={item.id} className="flex items-center justify-center p-5">
                               
                                <Image source={item.image} className="w-full h-[300px]" resizeMode="contain" />
                                <View className="flex flex-row items-center justify-center w-full mt-5">
                                    <Text className="text-3xl text-black font-bold mx-10">{item.title}</Text>
                                </View>
                                <Text className=" text-sm font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">{item.description}</Text>
                            </View>
                        )
                    })}
            </Swiper>
            <CustomButton title="Next" className="w-11/12 mt-10"/>
            <Text>
                Home helooo welcvomr
            </Text>
        </SafeAreaView>
    );
};
export default Onboarding;