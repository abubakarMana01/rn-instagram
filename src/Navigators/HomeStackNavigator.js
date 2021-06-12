import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import MessagesScreen from "../screens/MessagesScreen";

const HomeStackNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}>
			<Stack.Screen
				name="Feeds"
				component={HomeScreen}
				options={({ navigation }) => ({
					headerTitle: false,
					headerLeft: () => (
						<Image
							source={require("../../assets/images/logo.png")}
							resizeMode="contain"
							style={{ width: 135 }}
						/>
					),
					headerRight: () => (
						<View style={styles.headerIcons}>
							<TouchableOpacity style={styles.iconContainer}>
								<Feather name="plus-square" size={25} color="black" />
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.iconContainer}
								onPress={() => navigation.navigate("Messages")}
							>
								<MaterialCommunityIcons
									name="facebook-messenger"
									size={25}
									color="black"
								/>
							</TouchableOpacity>
						</View>
					),
				})}
			/>
			<Stack.Screen name="Messages" component={MessagesScreen} />
		</Stack.Navigator>
	);
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
	headerIcons: { flexDirection: "row", marginRight: 10 },
	iconContainer: { marginHorizontal: 10 },
});
