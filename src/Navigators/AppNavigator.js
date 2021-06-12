import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	Foundation,
	Feather,
	AntDesign,
	Ionicons,
	FontAwesome,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import NewPostScreen from "../screens/NewPostScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import AccountScreen from "../screens/AccountScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import HomeStackNavigator from "./HomeStackNavigator";

const AppNavigator = () => {
	const Tab = createBottomTabNavigator();

	return (
		<NavigationContainer>
			<Tab.Navigator tabBarOptions={{ showLabel: false }}>
				<Tab.Screen
					name="Home"
					component={HomeStackNavigator}
					options={{
						tabBarIcon: ({ focused }) =>
							!focused ? (
								<MaterialCommunityIcons
									name="home-outline"
									size={25}
									color="black"
								/>
							) : (
								<Foundation name="home" size={25} color="black" />
							),
					}}
				/>
				<Tab.Screen
					name="Discover"
					component={DiscoveryScreen}
					options={{
						tabBarIcon: ({ focused }) =>
							!focused ? (
								<Feather name="search" size={25} color="black" />
							) : (
								<FontAwesome name="search" size={25} color="black" />
							),
					}}
				/>
				<Tab.Screen
					name="Post"
					component={NewPostScreen}
					options={{
						tabBarIcon: ({ focused }) =>
							!focused ? (
								<Feather name="plus-square" size={25} color="black" />
							) : (
								<FontAwesome5 name="plus-square" size={24} color="black" />
							),
					}}
				/>
				<Tab.Screen
					name="Notifications"
					component={NotificationsScreen}
					options={{
						tabBarIcon: ({ focused }) =>
							!focused ? (
								<AntDesign name="hearto" size={25} color="black" />
							) : (
								<AntDesign name="heart" size={25} color="black" />
							),
					}}
				/>
				<Tab.Screen
					name="Account"
					component={AccountScreen}
					options={{
						tabBarIcon: ({ focused }) =>
							!focused ? (
								<Ionicons name="person-outline" size={25} color="black" />
							) : (
								<Ionicons name="person" size={25} color="black" />
							),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
