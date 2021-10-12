import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ReelsScreen from "../screens/ReelsScreen";
import DiscoveryScreen from "../screens/DiscoveryScreen";
import AccountScreen from "../screens/AccountScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import HomeScreen from "../screens/HomeScreen";
import { Colors } from "../config";
import { Image } from "react-native";

export default function AppNavigator() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
				style: { borderTopWidth: 0.5, borderTopColor: "#ffffff20", height: 50 },
			}}
		>
			<Tab.Screen
				name="Instagram"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/images/Icons/home.png")}
								style={{ width: 26, height: 26 }}
							/>
						) : (
							<Image
								source={require("../../assets/images/Icons/home-outline.png")}
								style={{ width: 26, height: 26 }}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Discover"
				component={DiscoveryScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/images/Icons/search.png")}
								style={{ width: 26, height: 26 }}
							/>
						) : (
							<Image
								source={require("../../assets/images/Icons/search-outline.png")}
								style={{ width: 26, height: 26 }}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Reels"
				component={ReelsScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/images/Icons/reel.png")}
								style={{ width: 26, height: 26 }}
							/>
						) : (
							<Image
								source={require("../../assets/images/Icons/reel-outline.png")}
								style={{ width: 26, height: 26 }}
							/>
						),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={NotificationsScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<Image
								source={require("../../assets/images/Icons/shopping-bag.png")}
								style={{ width: 26, height: 26 }}
							/>
						) : (
							<Image
								source={require("../../assets/images/Icons/shopping-bag-outline.png")}
								style={{ width: 26, height: 26 }}
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
}
