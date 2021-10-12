import React from "react";
import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AccountGallery from "../screens/AccountGallery";
import { Colors } from "../config";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TaggedImages = () => {
	return (
		<View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
			<Text>Tagged Images</Text>
		</View>
	);
};

const TopTab = createMaterialTopTabNavigator();

const AccountTopTabNavigator = () => {
	return (
		<TopTab.Navigator
			tabBarOptions={{
				activeTintColor: Colors.light,
				inactiveTintColor: Colors.darkGrey,
				showLabel: false,
				showIcon: true,
				indicatorStyle: {
					backgroundColor: Colors.light,
					height: 1.1,
				},
			}}
		>
			<TopTab.Screen
				name="AccountGallery"
				component={AccountGallery}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="grid" color={color} size={25} />
					),
				}}
			/>
			<TopTab.Screen
				name="TaggedImages"
				component={TaggedImages}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="clipboard-account-outline"
							size={25}
							color={color}
						/>
					),
				}}
			/>
		</TopTab.Navigator>
	);
};

export default AccountTopTabNavigator;
