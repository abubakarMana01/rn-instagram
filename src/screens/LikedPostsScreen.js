import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	FlatList,
	Dimensions,
	Image,
	TouchableWithoutFeedback,
} from "react-native";
import AppLoadingAnimation from "../components/AppLoadingAnimation";
import PostsCustomHeader from "../components/PostsCustomHeader";

import { Colors } from "../config";
import { db } from "../config/firebase";
import { useAuthContext } from "../contexts/AuthProvider";

export default function LikedPostsScreen({ navigation }) {
	const [likedPosts, setLikedPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const { currentUser } = useAuthContext();

	useEffect(() => {
		setIsLoading(true);
		const unsubscribe = db
			.collection("users")
			.doc(currentUser.uid)
			.collection("likedPosts")
			.onSnapshot(
				snapshot => {
					setLikedPosts(snapshot.docs.map(doc => doc.data()));
					setIsLoading(false);
				},
				err => console.log(err.message)
			);

		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<PostsCustomHeader navigation={navigation} headerTitle="Liked Posts" />
			{isLoading ? (
				<AppLoadingAnimation />
			) : (
				<FlatList
					keyExtractor={item => item.createdAt + Math.random().toString()}
					data={likedPosts}
					numColumns={3}
					renderItem={({ item }) => (
						<TouchableWithoutFeedback
							onPress={() => navigation.navigate("View post", { post: item })}
						>
							<View style={styles.imageContainer}>
								<Image style={styles.image} source={{ uri: item.imageUrl }} />
							</View>
						</TouchableWithoutFeedback>
					)}
				/>
			)}
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
