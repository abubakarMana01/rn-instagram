import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DiscoveryScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Discovery</Text>
		</View>
	);
};

export default DiscoveryScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "crimson",
	},
});
