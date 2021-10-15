import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Post from "../components/Post";
import PostsCustomHeader from "../components/PostsCustomHeader";

export default function ViewPostScreen({ route, navigation }) {
	return (
		<View style={styles.container}>
			<PostsCustomHeader navigation={navigation} headerTitle="Posts" />
			<Post post={route.params.post} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
