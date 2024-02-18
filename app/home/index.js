import * as Device from "expo-device";
import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import ScreenHeaderPic from "../../components/ScreenHeaderPic";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#202020",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
    padding: 15,
  },
  welcome: {
    fontSize: 25,
    fontFamily: "DMMedium",
    color: "#fff",
    marginBottom: 20,
  },

  deviceProp: {
    fontSize: 20,
    fontFamily: "DMRegular",
    color: "#f09a36",
    textAlign: "center",
  },
  headerLeft: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "DMBold",
  },
});

const Home = () => {
  const params = useLocalSearchParams();
  const { userName } = params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#f09a36"
        animated={true}
      />

      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f09a36" },
          headerShadowVisible: false,
          headerLeft: () => <Text style={styles.headerLeft}>Lipeunim</Text>,
          headerRight: () => <ScreenHeaderPic dimension="100%" />,
          headerTitle: "",
        }}
      />

      <Text style={styles.welcome}>Welcome {userName} 🥰</Text>
      <Text style={styles.deviceProp}>
        {Device.manufacturer}: {Device.modelName}
      </Text>
    </SafeAreaView>
  );
};

export default Home;
