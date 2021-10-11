import React from "react";
import {
	StyleSheet,
	Image,
	View,
	Dimensions,
	TextInput,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AuthButton from "../../components/Auth/AuthButton";
import { Colors, Styles } from "../../config";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import { auth } from "../../config/firebase";

export default function LoginScreen({ navigation }) {
	const validationSchema = Yup.object().shape({
		email: Yup.string().required().min(3).email().trim().label("Email"),
		password: Yup.string().required().min(6).max(255).label("Password"),
	});

	const handleSubmit = async values => {
		try {
			const cred = await auth.signInWithEmailAndPassword(
				values.email,
				values.password
			);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={{
							uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
						}}
					/>
				</View>
				<Formik
					initialValues={{ email: "", password: "" }}
					validationSchema={validationSchema}
					onSubmit={values => handleSubmit(values)}
				>
					{({ values, handleChange, handleSubmit, errors }) => (
						<View style={styles.formContainer}>
							<View style={styles.textInputContainer}>
								<TextInput
									placeholderTextColor="#ffffff80"
									style={styles.textInput}
									placeholder="Email"
									keyboardType="email-address"
									autoCapitalize="none"
									value={values.email}
									onChangeText={handleChange("email")}
								/>
							</View>
							{errors.email && <ErrorMessage error={errors.email} />}
							<View style={styles.textInputContainer}>
								<TextInput
									style={styles.textInput}
									placeholderTextColor="#ffffff80"
									placeholder="Password"
									autoCapitalize="none"
									secureTextEntry
									value={values.password}
									onChangeText={handleChange("password")}
								/>
							</View>
							{errors.password && <ErrorMessage error={errors.password} />}
							<View style={styles.forgotPasswordContainer}>
								<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
							</View>
							<View style={styles.buttonContainer}>
								<AuthButton title="Log In" onPress={handleSubmit} />
							</View>
						</View>
					)}
				</Formik>
				<TouchableOpacity
					style={styles.authOption}
					onPress={() => navigation.navigate("Signup")}
				>
					<Text style={styles.authOptionText}>
						Don't have an account?{" "}
						<Text style={styles.authOptionLink}>Sign Up</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	logo: {
		width: 100,
		height: 100,
	},
	logoContainer: {
		height: Dimensions.get("window").height / 3.5,
		justifyContent: "center",
		alignItems: "center",
	},
	textInputContainer: {
		borderColor: Colors.grey,
		borderWidth: 1,
		height: 40,
		justifyContent: "center",
		marginVertical: 5,
		borderRadius: 4,
	},
	textInput: {
		paddingHorizontal: 10,
		color: Colors.light,
	},
	forgotPasswordContainer: {
		alignSelf: "flex-end",
	},
	forgotPasswordText: {
		fontSize: 14,
		color: "#3477eb",
		fontWeight: Styles.bold,
	},
	buttonContainer: {
		marginTop: 30,
		marginBottom: 40,
	},
	authOption: {
		alignSelf: "center",
	},
	authOptionText: {
		textAlign: "center",
		fontWeight: Styles.medium,
		color: Colors.light,
	},
	authOptionLink: {
		fontWeight: Styles.bold,
		color: Colors.blue,
	},
});
