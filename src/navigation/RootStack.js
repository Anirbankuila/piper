import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screen/Onboarding/Onboarding';
import Splash from '../screen/Splash/Splash';
import Profile from '../screen/Profile/Profile';
import Privacy from '../screen/Privacy/Privacy';
import Routes from './Routes';

export default function RootStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={Routes.SPLASH}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Routes.SPLASH} component={Splash} />
      <Stack.Screen name={Routes.ONBOARDING} component={Onboarding} />
      <Stack.Screen
        name={Routes.PROFILE}
        component={Profile}
        headerShown={true}
      />
      <Stack.Screen
        name={Routes.PRIVACY}
        component={Privacy}
        headerShown={true}
      />
    </Stack.Navigator>
  );
}
