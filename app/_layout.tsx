import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    "Jakarta-Bold": require("../uber_assets/assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../uber_assets/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../uber_assets/assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../uber_assets/assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../uber_assets/assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../uber_assets/assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../uber_assets/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
 
      <Stack>
        <Stack.Screen name="index" options={{ headerShown:false }} />
        <Stack.Screen name="(root)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="+not-found" />
      </Stack>
 
  );
}
