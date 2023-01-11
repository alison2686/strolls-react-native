import React from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Strolls</Text>
      <Image
        style={{ width: 350, height: 200 }}
        source={require("../../assets/landing.png")}
      />
      <Text style={styles.text}>Find Your Adventure</Text>
      <Button
        style={styles.button}
        title="Let's Go!"
        onPress={() => navigation.navigate("FindRoute")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 40,
    marginBottom: 60,
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    padding: 25,
  },
  button: {
    backgroundColor: "#89c5cc",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
});

export default HomeScreen;
