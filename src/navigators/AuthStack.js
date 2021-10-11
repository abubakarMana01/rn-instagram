import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screens/Auth/SignUpScreen";
import LoginScreen from "../screens/Auth/LoginScreen";

const AuthStackNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Signup" component={SignUpScreen} />
		</Stack.Navigator>
	);
};

export default AuthStackNavigator;
