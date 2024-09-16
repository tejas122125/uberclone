import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link } from "expo-router";
const Home = () => {
    const { user } = useUser()
    return (
        <SafeAreaView>
            <View>
                <SignedIn>
                    <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
                </SignedIn>
                <SignedOut>
                    <Link href="/(auth)/sign-in">
                        <Text>Sign In</Text>
                    </Link>
                    <Link href="/(auth)/sign-up">
                        <Text>Sign Up</Text>
                    </Link>
                </SignedOut>
            </View>
        </SafeAreaView>
    );
};
export default Home;