import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Story = ({ imageUri, width = 70, height = 70 }) => {
	return (
		<View
			style={[styles.container, { width, height, borderRadius: width / 2 }]}
		>
			<Image
				style={[styles.storyImage, { borderRadius: width / 2 }]}
				source={{ uri: imageUri }}
			/>
		</View>
	);
};

export default Story;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		borderColor: "purple",
		overflow: "hidden",
		padding: 2,
	},
	storyImage: {
		width: "100%",
		height: "100%",
	},
});
