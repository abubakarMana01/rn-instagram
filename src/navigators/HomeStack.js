import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import AppNavigator from "./AppBottomTabs";
import AddPostScreen from "../screens/AddPostScreen";

const HomeStackNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Feeds"
				component={AppNavigator}
				options={() => ({
					headerShown: false,
				})}
			/>
			<Stack.Screen
				name="Messages"
				component={MessagesScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Add post" component={AddPostScreen} />
		</Stack.Navigator>
	);
};

export default HomeStackNavigator;
