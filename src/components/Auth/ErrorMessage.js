import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../config";

export default function ErrorMessage({ error }) {
	return (
		<View>
			<Text style={styles.error}>{error}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	error: {
		color: Colors.red,
		marginBottom: 10,
	},
});
