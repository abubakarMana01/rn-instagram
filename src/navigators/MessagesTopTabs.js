import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ChatList from "../components/Messages/ChatList";
import { Colors, Styles } from "../config";

const Rooms = () => {
	return (
		<View style={styles.container}>
			<Text>Rooms</Text>
		</View>
	);
};

const MessagesTopBarNavigator = () => {
	const TopTab = createMaterialTopTabNavigator();

	return (
		<TopTab.Navigator
			swipeEnabled={false}
			tabBarOptions={{
				activeTintColor: Colors.light,
				inactiveTintColor: Colors.grey,
				labelStyle: {
					textTransform: "capitalize",
					fontWeight: Styles.medium,
				},
				indicatorStyle: {
					backgroundColor: Colors.light,
					height: 1.1,
				},
			}}
		>
			<TopTab.Screen name="Chats" component={ChatList} />
			<TopTab.Screen name="Rooms" component={Rooms} />
		</TopTab.Navigator>
	);
};

export default MessagesTopBarNavigator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
