import { icons } from "@/constants";
import { router } from "expo-router";
import { TouchableOpacity, View, Image,Text } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "./Map";
import { useRef } from "react";
import BottomSheet, {
    BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

const RideLayout = ({ title,snappoints, children }: { title: string,snappoints:[], children: React.ReactNode }) => {
    const bottomSheetRef = useRef<BottomSheet> (null);
    return (
        <GestureHandlerRootView>
            <View className="flex-1 bg-white">
                <View className="flex flex-col h-screen bg-blue-300">
                    <View className="flex flex-row absolute z-10 top-16 items-center justify-center px-5">
                        <TouchableOpacity onPress={() => router.back()}>
                            <View className="w-10 h-10 justify-center items-center bg-white rounded-full">
                                <Image className="w-6 h-6" source={icons.backArrow} resizeMode="contain" />
                            </View>

                        </TouchableOpacity>
                        <Text className="text-xl font-JakartaSemiBold ml-5">{title || "Go Back"}</Text>
                    </View>
                    <Map/>
                </View>
                <BottomSheet keyboardBehavior="extend" 
                ref={bottomSheetRef} snapPoints={snappoints || ['40%','85%']} index={0}>
                    <BottomSheetView style={{flex:1, padding:20}}>
                        {children}
                    </BottomSheetView>

                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}
export default RideLayout;