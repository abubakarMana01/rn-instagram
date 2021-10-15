import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { number } from "yup";
import { Colors, Styles } from "../../config";
import { db } from "../../config/firebase";
import { useAuthContext } from "../../contexts/AuthProvider";

export default function AccountSocialInfo() {
	const { currentUser } = useAuthContext();
	const [numberOfPosts, setNumberOfPosts] = useState("-");
	const [numberOfFollowers, setNumberOfFollowers] = useState("-");
	const [numberOfFollowing, setNumberOfFollowing] = useState("-");

	useEffect(() => {
		const unsubscribe = db
			.collection("users")
			.doc(currentUser.uid)
			.collection("posts")
			.onSnapshot(
				snapshot => setNumberOfPosts(snapshot.docs.length),
				err => console.log(err.message)
			);

		db.collection("users")
			.doc(currentUser.uid)
			.onSnapshot(
				snapshot => {
					setNumberOfFollowers(snapshot.data().followers.length);
					setNumberOfFollowing(snapshot.data().following.length);
				},
				err => console.log(err.message)
			);

		return unsubscribe;
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}></View>
			<View style={styles.profileStatsContainer}>
				<View style={styles.profileStats}>
					<View style={styles.statContainer}>
						<Text style={styles.statNumber}>{numberOfPosts}</Text>
						<Text style={styles.statName}>Posts</Text>
					</View>
					<View style={styles.statContainer}>
						<Text style={styles.statNumber}>{numberOfFollowers}</Text>
						<Text style={styles.statName}>Followers</Text>
					</View>
					<View style={styles.statContainer}>
						<Text style={styles.statNumber}>{numberOfFollowing}</Text>
						<Text style={styles.statName}>Following</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		paddingTop: 15,
		paddingBottom: 5,
	},
	imageContainer: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: Colors.grey,
	},
	profileStatsContainer: {
		flex: 1,
		alignItems: "center",
		marginLeft: 20,
	},
	profileStats: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
	},
	statNumber: {
		textAlign: "center",
		fontSize: 18,
		fontWeight: Styles.bold,
		color: Colors.light,
	},
	statName: {
		textAlign: "center",
		fontSize: 14,
		fontWeight: Styles.medium,
		color: Colors.light,
	},
});
