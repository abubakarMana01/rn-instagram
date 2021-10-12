import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackNavigator from "./HomeStack";
import navigationTheme from "./navigationTheme";
import AuthStackNavigator from "./AuthStack";
import { auth } from "../config/firebase";
import { useAuthContext } from "../contexts/AuthProvider";

export default function App() {
	const { currentUser, setCurrentUser } = useAuthContext();
	LogBox.ignoreLogs(["Setting a timer"]);

	// Set an initializing state whilst Firebase connects
	const [initializing, setInitializing] = useState(true);

	function onAuthStateChanged(user) {
		setCurrentUser(user);

		if (initializing) {
			setInitializing(false);
		}
	}

	useEffect(() => {
		const subscriber = auth.onAuthStateChanged(onAuthStateChanged);

		return subscriber;
	}, []);

	if (initializing) return null;

	return (
		<NavigationContainer theme={navigationTheme}>
			{currentUser ? <HomeStackNavigator /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
}
