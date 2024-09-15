import { InputFieldProps } from "@/types/type";
import { View, KeyboardAvoidingView, Text, TouchableWithoutFeedback, Image, TextInput, Platform, Keyboard } from "react-native"

const InputField = ({ labelStyle, label, icon, className, containerStyle, inputStyle, iconStyle, secureTextEntry = false, ...props }: InputFieldProps) => {
    return (

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}  className="bg-red-100 mx-4">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View className=" my-2 w-full ">
                    <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
                        {label}
                    </Text>
                    <View className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-400 ${containerStyle}`}>
                        {icon && (
                            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
                        )}
                        <TextInput className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
                            secureTextEntry={secureTextEntry}
                            {...props}
                        />

                    </View>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default InputField;