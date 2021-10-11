import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	Feather,
	Ionicons,
	FontAwesome,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import NewPostScreen from "../screens/NewPostScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import AccountScreen from "../screens/AccountScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import HomeScreen from "../screens/HomeScreen";
import { Colors } from "../config";

const AppNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: { borderTopWidth: 0.5, borderTopColor: "#ffffff20" },
			}}
		>
			<Tab.Screen
				name="Instagram"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						!focused ? (
							<Ionicons name="home-outline" size={26} color={Colors.light} />
						) : (
							<Ionicons name="home" size={26} color={Colors.light} />
						),
				}}
			/>
			<Tab.Screen
				name="Discover"
				component={DiscoveryScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Feather name="search" size={26} color={Colors.light} />
						) : (
							<Ionicons name="ios-search" size={26} color={Colors.light} />
						),
				}}
			/>
			<Tab.Screen
				name="Post"
				component={NewPostScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<FontAwesome name="plus-square" size={26} color={Colors.light} />
						) : (
							<FontAwesome
								name="plus-square-o"
								size={26}
								color={Colors.light}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={NotificationsScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						!focused ? (
							<MaterialCommunityIcons
								name="heart-outline"
								size={26}
								color={Colors.light}
							/>
						) : (
							<MaterialCommunityIcons
								name="heart"
								size={26}
								color={Colors.light}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Account"
				component={AccountScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						!focused ? (
							<MaterialCommunityIcons
								name="account-circle-outline"
								size={26}
								color={Colors.light}
							/>
						) : (
							<MaterialCommunityIcons
								name="account-circle"
								size={26}
								color={Colors.light}
							/>
						),
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
