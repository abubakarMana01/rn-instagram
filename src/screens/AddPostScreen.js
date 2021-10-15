import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
	StyleSheet,
	TouchableOpacity,
	TextInput,
	View,
	Text,
	ToastAndroid,
} from "react-native";
import firebase from "firebase/app";
import { Formik } from "formik";
import * as Yup from "yup";

import { Colors } from "../config";
import ErrorMessage from "../components/Auth/ErrorMessage";
import { db } from "../config/firebase";
import { useAuthContext } from "../contexts/AuthProvider";

export default function AddPostScreen({ navigation }) {
	const { currentUser } = useAuthContext();

	const validationSchema = Yup.object().shape({
		caption: Yup.string()
			.max(300, "Characters cannot be more than 300")
			.trim()
			.label("Caption"),
	});

	const handleSubmit = values => {
		db.collection("users")
			.doc(currentUser.uid)
			.collection("posts")
			.add({
				caption: values.caption,
				imageUrl:
					"https://phantom-marca.unidadeditorial.es/cad57253bb118bb77a748d848778cc81/f/webp/assets/multimedia/imagenes/2021/10/12/16340512953884.jpg",
				user: {
					username: currentUser.displayName,
					imageUrl:
						"https://phantom-marca.unidadeditorial.es/cad57253bb118bb77a748d848778cc81/f/webp/assets/multimedia/imagenes/2021/10/12/16340512953884.jpg",
				},
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				likes: 0,
				comments: [],
			})
			.then(() => ToastAndroid.show("Post added", ToastAndroid.SHORT))
			.catch(err => {
				console.log(err.message);
				ToastAndroid.show("Post added", ToastAndroid.SHORT);
			});

		navigation.goBack();
	};

	return (
		<View style={styles.container}>
			<Formik
				initialValues={{ caption: "" }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ handleSubmit, handleChange, errors, values }) => (
					<>
						<View style={styles.inputsContainer}>
							<TouchableOpacity style={styles.imageUploadContainer}>
								<MaterialCommunityIcons
									name="camera"
									color={Colors.darkGrey}
									size={40}
								/>
							</TouchableOpacity>
							<View style={styles.textInputContainer}>
								<TextInput
									multiline
									style={styles.textInput}
									placeholder="Write a caption..."
									placeholderTextColor={Colors.grey}
									value={values.caption}
									onChangeText={handleChange("caption")}
								/>
								{errors.caption && <ErrorMessage error={errors.caption} />}
							</View>
						</View>

						<TouchableOpacity
							style={styles.shareButtonContainer}
							onPress={handleSubmit}
						>
							<Text style={styles.shareText}>Share</Text>
						</TouchableOpacity>
					</>
				)}
			</Formik>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
	},
	inputsContainer: {
		flexDirection: "row",
		paddingTop: 20,
		paddingBottom: 35,
		borderBottomColor: Colors.grey,
		borderBottomWidth: 1,
	},
	imageUploadContainer: {
		width: 120,
		height: 120,
		overflow: "hidden",
		borderRadius: 10,
		backgroundColor: Colors.lightgrey,
		justifyContent: "center",
		alignItems: "center",
	},
	textInputContainer: {
		flex: 1,
		height: 40,
		marginLeft: 15,
	},
	textInput: {
		height: "100%",
		fontSize: 16,
		color: Colors.light,
	},
	shareButtonContainer: {
		marginTop: 35,
		alignSelf: "center",
	},
	shareText: {
		color: Colors.light,
		fontSize: 18,
	},
});
