import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Colors } from "../config";

export default function AppLoadingAnimation() {
	return (
		<View style={styles.container}>
			<ActivityIndicator color={Colors.light} size="large" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
