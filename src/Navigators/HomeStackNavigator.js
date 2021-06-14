import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import AppNavigator from "./AppNavigator";

const HomeStackNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator
			headerMode="screen"
			screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
		>
			<Stack.Screen
				name="Home"
				component={AppNavigator}
				options={() => ({
					headerShown: false,
				})}
			/>
			<Stack.Screen
				name="Messages"
				component={MessagesScreen}
				options={{ headerShown: true }}
			/>
		</Stack.Navigator>
	);
};

export default HomeStackNavigator;
