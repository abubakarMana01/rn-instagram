import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./HomeStack";
import navigationTheme from "./navigationTheme";
import AuthStackNavigator from "./AuthStack";

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			{/* <HomeStackNavigator /> */}
			<AuthStackNavigator />
		</NavigationContainer>
	);
}
