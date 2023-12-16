import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Login from "../screens/Login";
import Register from "../screens/Register";
import TabNav from "./TabNav";
import Logo from "../components/Logo";
import ChatRoom from "../screens/ChatRoom";
import ChatProfile from "../components/ChatProfile";
import DetailPost from "../screens/DetailPost";
import Logout from "../components/Logout";
import AddPost from "../screens/AddPost";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="Main"
              component={TabNav}
              options={() => {
                return {
                  headerShown: false,
                };
              }}
            />
            <Stack.Screen
              name="Detail"
              component={DetailPost}
              options={() => {
                return {
                  headerTitle: () => <Logo />,
                  headerStyle: {
                    backgroundColor: "#B0C3F0",
                  },
                };
              }}
            />
            <Stack.Screen
              name="ChatRoom"
              component={ChatRoom}
              options={() => {
                return {
                  headerTitle: () => <ChatProfile />,
                  headerStyle: { backgroundColor: "#B0C3F0" },
                };
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddPost}
              options={() => {
                return {
                  headerShown: false,
                };
              }}
            />
          </>
        ) : (
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
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
