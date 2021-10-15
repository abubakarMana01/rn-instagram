import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Dimensions, Image } from "react-native";

import { Colors } from "../config";
import { db } from "../config/firebase";
import { useAuthContext } from "../contexts/AuthProvider";

// const posts = [
// 	{
// 		imageUri:
// 			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
// 		key: 1,
// 	},
// 	{
// 		imageUri:
// 			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
// 		key: 2,
// 	},
// 	{
// 		imageUri:
// 			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
// 		key: 3,
// 	},
// 	{
// 		imageUri:
// 			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
// 		key: 4,
// 	},
// 	{
// 		imageUri:
// 			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
// 		key: 5,
// 	},
// 	{
// 		imageUri:
// 			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
// 		key: 6,
// 	},
// 	{
// 		imageUri:
// 			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
// 		key: 7,
// 	},
// 	{
// 		imageUri:
// 			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
// 		key: 8,
// 	},
// 	{
// 		imageUri:
// 			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
// 		key: 9,
// 	},
// 	{
// 		imageUri:
// 			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
// 		key: 10,
// 	},
// 	{
// 		imageUri:
// 			"https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
// 		key: 11,
// 	},
// 	{
// 		imageUri:
// 			"https://i.pinimg.com/originals/0b/ac/f6/0bacf62a4bd456d02d02c6b8a5c98f67.jpg",
// 		key: 12,
// 	},
// ];

export default function AccountGallery() {
	const [posts, setPosts] = useState([]);

	const { currentUser } = useAuthContext();

	useEffect(() => {
		const unsubscribe = db
			.collection("users")
			.doc(currentUser.uid)
			.collection("posts")
			.orderBy("createdAt", "desc")
			.onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())));
		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<FlatList
				keyExtractor={item => item.createdAt + Math.random().toString()}
				data={posts}
				numColumns={3}
				renderItem={({ item }) => (
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={{ uri: item.imageUrl }} />
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		width: Dimensions.get("window").width / 3,
		height: Dimensions.get("window").width / 3,
		backgroundColor: Colors.grey,
		margin: 1.3,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});
