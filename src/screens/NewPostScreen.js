import React from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	StatusBar,
} from "react-native";
import Colors from "../config/Colors";

const NewPostScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Text>NewPost</Text>
		</SafeAreaView>
	);
};

export default NewPostScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.light,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
