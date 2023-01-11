import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Strolls: A Walking Adventure!</Text>
      <Image
        style={{ width: 350, height: 200 }}
        source={require("../../assets/landing.png")}
      />
      <Button
        title="Let's Go!"
        onPress={() => navigation.navigate("FindRoute")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
