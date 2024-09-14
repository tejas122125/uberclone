import { onboarding } from "@/constants";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"
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
           
            <Swiper className="bg-green-300" ref={swiperRef} loop={false} dot={<View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0]" />}
                activeDot={<View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />}
                onIndexChanged={(index) => { setIndexValue(index) }}>
                    {onboarding.map((item) =>
                    {
                        return (
                            <View>
                                <Text>{item.title}</Text>
                            </View>
                        )
                    })}
       

            </Swiper>
            <Text>
                Home helooo welcvomr
            </Text>
        </SafeAreaView>
    );
};
export default Onboarding;