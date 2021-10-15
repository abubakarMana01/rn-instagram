import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView, LogBox } from "react-native";

import MessagesCustomHeader from "../components/Messages/MessagesCustomHeader";
import MessagesTopTabs from "../navigators/MessagesTopTabs";

const MessagesScreen = ({ navigation }) => {
	useEffect(() => {
		LogBox.ignoreLogs([
			"VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.",
		]);
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<MessagesCustomHeader handleBackNavigation={navigation.goBack} />
			<MessagesTopTabs />
		</SafeAreaView>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
