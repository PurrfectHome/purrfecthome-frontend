import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

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
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "darkgreen",
        tabBarInactiveTintColor: "seagreen",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => {
          return {
            headerShown: false,
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
    </Tab.Navigator>
  );
}
