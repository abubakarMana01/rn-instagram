import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";

import stories from "../../../assets/data/stories";
import { Colors } from "../../config";
import ProfilePicture from "../ProfilePicture";

const Stories = () => {
	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={() => (
					<View style={[styles.storyContainer, { marginLeft: 10 }]}>
						<ProfilePicture
							borderVisible={false}
							showPlus={true}
							imageUri={
								"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg"
							}
						/>
						<Text style={{ textAlign: "center" }} numberOfLines={1}>
							Your story
						</Text>
					</View>
				)}
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
						<Text style={styles.name} numberOfLines={1}>
							{item.user.name}
						</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default Stories;

const styles = StyleSheet.create({
	container: {
		paddingVertical: 7,
		backgroundColor: Colors.dark,
		borderColor: "#303030",
		borderBottomWidth: 0.5,
		flexDirection: "row",
	},
	storyContainer: {
		marginHorizontal: 5,
		alignItems: "center",
		width: 70,
	},
	name: {
		color: Colors.light,
		marginTop: 3,
		fontSize: 14,
	},
});
