import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screen/Onboarding/Onboarding';
import Splash from '../screen/Splash/Splash';
import Profile from '../screen/Profile/Profile';
import Privacy from '../screen/Privacy/Privacy';
import Otpscreen from '../screen/OtpScreen/OtpScreen';
import AboutScreen from '../screen/AboutScreen/AboutScreen';
import DocumentScreen from '../screen/DocumentScreen/DocumentScreen';
import ChildTeam from '../screen/ChildTeam/ChildTeam';

import Routes from './Routes';
import FONTS from '../constants/fonts';
import Colors from '../constants/colors';

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={Routes.SPLASH}
      screenOptions={{
        animation:'fade',
        headerShown: false, // default hidden
      }}
    >
      <Stack.Screen
        name={Routes.SPLASH}
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.ONBOARDING}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{ headerShown: false }} // ✅ only here header visible
      />
      <Stack.Screen
        name={Routes.PRIVACY}
        component={Privacy}
        options={{
          headerTitleStyle: {
            fontSize: 16, // ✅ font size
            fontWeight: FONTS.bold, // optional
            color: Colors.text, // optional
          },
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            shadowColor: 'transparent', // iOS shadow remove
            elevation: 0, // Android shadow remove
          },
        }} // ✅ header visible
      />
      <Stack.Screen
        name={Routes.OTPSCREEN}
        component={Otpscreen}
        options={{ headerShown: false }} // ✅ header visible
      />
      <Stack.Screen
        name={Routes.ABOUTSCREEN}
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.DOCUMENTSCREEN}
        component={DocumentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CHILDTEAM}
        component={ChildTeam}
        options={{ headerShown: false , animation:'fade'}}
      />
    </Stack.Navigator>
  );
}
