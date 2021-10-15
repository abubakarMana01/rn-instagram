import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	StatusBar,
} from "react-native";
import Colors from "../config/Colors";

const DiscoveryScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Discovery</Text>
		</SafeAreaView>
	);
};

export default DiscoveryScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.blue,
	},
});
