import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MessagesScreen = () => {
	const navigation = useNavigation();

	return <View style={styles.container}></View>;
};

export default MessagesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
