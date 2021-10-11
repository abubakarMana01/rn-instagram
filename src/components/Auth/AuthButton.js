import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors, Styles } from "../../config";

export default function AuthButton({ title, onPress }) {
	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Text style={styles.buttonTitle}>{title}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.blue,
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
