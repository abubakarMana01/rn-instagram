import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";
import AppNavigator from "./AppBottomTabs";
import AddPostScreen from "../screens/AddPostScreen";
import ViewPostScreen from "../screens/ViewPostScreen";

const HomeStackNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Feeds" component={AppNavigator} />
			<Stack.Screen name="Messages" component={MessagesScreen} />
			<Stack.Screen name="Add post" component={AddPostScreen} />
			<Stack.Screen name="View post" component={ViewPostScreen} />
		</Stack.Navigator>
	);
};

export default HomeStackNavigator;
