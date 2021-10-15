import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import { Colors, Styles } from "../../config";

export default function AuthButton({ title, onPress, isLoading = false }) {
	return (
		<Pressable
			disabled={isLoading}
			onPress={onPress}
			style={[
				styles.container,
				{ backgroundColor: isLoading ? Colors.lightBlue : Colors.blue },
			]}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={Colors.lightgrey} />
			) : (
				<Text style={styles.buttonTitle}>{title}</Text>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 45,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 4,
	},
	buttonTitle: {
		color: Colors.light,
		fontWeight: Styles.bold,
		fontSize: 16,
	},
});
