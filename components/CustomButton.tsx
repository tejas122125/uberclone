import { ButtonProps } from '@/types/type';
import { TouchableOpacity, Text } from 'react-native';

const getTextvariant = (variant: ButtonProps["textVariant"]) => {

    switch (variant) {
        case "primary": return "text-black";
        case "secondary": return "text-gray-100";

        case "danger": return "text-red-100";
        case "success": return "text-green-100";
        default:
            return "text-white";
    }
}


const getBgVariant = (variant: ButtonProps["bgVariant"]) => {

    switch (variant) {
        case "secondary": return "bg-gray-500";
        case "danger": return "bg-red-500";
        case "success": return "bg-green-500";
        case "outline": return "bg-transparent border-neutral-300 border-[0.5px]";
        default:
            return "bg-[#0286ff]";
    }
}
const CustomButton = ({ onPress, title, bgVariant = 'primary', textVariant = 'default', IconLeft, IconRight, className, ...props }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} className={`w-full p-3 rounded-full flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${className} ${getBgVariant(bgVariant)}`} {...props}>

            {IconLeft && <IconLeft />}

            <Text className={`text-lg font-bold ${getTextvariant(textVariant)}`}>{title}</Text>

            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

export default CustomButton