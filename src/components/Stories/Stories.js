import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import stories from "../../../assets/data/stories";
import ProfilePicture from "../ProfilePicture";

const Stories = () => {
	return (
		<View style={styles.container}>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={stories}
				keyExtractor={item => item.user.id}
				renderItem={({ item }) => (
					<View style={styles.storyContainer}>
						<ProfilePicture
							imageUri={item.stories[0].imageUri}
							style={{ width: 30, height: 30 }}
						/>
						<Text numberOfLines={1}>{item.user.name}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default Stories;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		backgroundColor: "#00000003",
		borderColor: "#00000005",
		borderTopWidth: 2,
		borderBottomWidth: 2,
	},
	storyContainer: {
		marginHorizontal: 5,
		alignItems: "center",
	},
});
