import React from "react";
import { StyleSheet, View, FlatList, Text, Image } from "react-native";

import stories from "../../../assets/data/stories";
import ProfilePicture from "../ProfilePicture";

const Stories = () => {
	return (
		<View style={styles.container}>
			<FlatList
				ListHeaderComponent={() => (
					<>
						<ProfilePicture
							borderVisible={false}
							showPlus={true}
							imageUri={
								"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg"
							}
						/>
						<Text style={{ textAlign: "center" }} numberOfLines={1}>
							Me
						</Text>
					</>
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
		flexDirection: "row",
	},
	storyContainer: {
		marginHorizontal: 5,
		alignItems: "center",
	},
});
