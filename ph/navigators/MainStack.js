import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {/* {isLoggedIn ? (
        <>
        <Stack.Screen
          name="Main"
          component={TabNav}
          options={() => {
            return {
              headerTitle: () => <Logo />,
              headerRight: () => <LogoutButton />,
            };
          }}
        /> */}
        {/* ) : ( */}
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={() => {
              return {
                headerShown: false,
              };
            }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={() => {
              return {
                headerShown: false,
              };
            }}
          />
        </>
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
