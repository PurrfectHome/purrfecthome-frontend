import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import AddPost from "../screens/AddPost";
import Login from "../screens/Login";
import Inbox from "../screens/Inbox";
import DetailPost from "../screens/DetailPost";
import ChatRoom from "../screens/ChatRoom";
import Profile from "../screens/Profile";
import AdoptableCat from "../screens/AdoptableList";
import Logout from "../components/Logout";
import Logo from "../components/Logo";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Add") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Inbox") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Adoptable") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#DC5B93",
        tabBarInactiveTintColor: "#DC5B93",
        tabBarStyle: { backgroundColor: "#F3F7FF" },
      })}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => {
          return {
            headerLeft: () => <Logo />,
            headerTitle: "",
            headerStyle: { backgroundColor: "#B0C3F0" },
          };
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPost}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={() => {
          return {
            headerLeft: () => <Logo />,
            headerTitle: "",
            headerStyle: { backgroundColor: "#B0C3F0" },
          };
        }}
      />
      <Tab.Screen
        name="Adoptable"
        component={AdoptableCat}
        options={() => {
          return {
            headerLeft: () => <Logo />,
            headerTitle: "",
            headerStyle: { backgroundColor: "#B0C3F0" },
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
    </Tab.Navigator>
  );
}
