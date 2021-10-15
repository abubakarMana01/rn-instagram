import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import { Colors } from "../../config";

const PostImage = ({ post }) => {
	return (
		<View style={styles.container}>
			<Image source={{ uri: post.imageUri }} style={styles.image} />
		</View>
	);
};

export default PostImage;

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get("window").width,
		maxHeight: Dimensions.get("window").width,
		backgroundColor: Colors.darkGrey,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
