import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { AppStateProvider, useAppState } from "./src/state/AppState";
import Onboarding from "./src/screens/Onboarding";
import MainTabs from "./src/screens/MainTabs";

const Stack = createNativeStackNavigator();

function RootNav() {
  const { isOnboarded } = useAppState();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboarded ? (
          <Stack.Screen name="Onboarding" component={Onboarding} />
        ) : (
          <Stack.Screen name="Main" component={MainTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <StatusBar style="dark" />
      <RootNav />
    </AppStateProvider>
  );
}
