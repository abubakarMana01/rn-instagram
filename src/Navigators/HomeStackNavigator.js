import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import MessagesScreen from "../screens/MessagesScreen";
import AppNavigator from "./AppNavigator";

const HomeStackNavigator = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				headerMode="screen"
				screenOptions={{ cardStyle: { backgroundColor: "#fff" } }}
			>
				<Stack.Screen
					name="Instagram"
					component={AppNavigator}
					options={({ navigation }) => ({
						headerTitle: false,
						headerShown: true,
						headerLeft: () => (
							<Image
								source={require("../../assets/images/logo.png")}
								resizeMode="contain"
								style={{ width: 150, height: 50 }}
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
		</NavigationContainer>
	);
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
	headerIcons: { flexDirection: "row", marginRight: 10 },
	iconContainer: { marginHorizontal: 10 },
});
