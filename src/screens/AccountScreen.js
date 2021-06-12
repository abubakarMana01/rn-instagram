import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MessagesScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Account</Text>
		</View>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "purple",
	},
});
