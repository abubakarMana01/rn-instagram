import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Post from "../components/Post";

export default function ViewPostScreen({ route }) {
	return (
		<View style={styles.container}>
			<Post post={route.params.post} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
