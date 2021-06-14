import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NewPostScreen = () => {
	return (
		<View style={styles.container}>
			<Text>New Post</Text>
		</View>
	);
};

export default NewPostScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "dodgerblue",
	},
});
