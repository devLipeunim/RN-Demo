import * as Device from "expo-device";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenHeaderPic from "../components/ScreenHeaderPic";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#202020",
    padding: 15,
  },
  greeting: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "DMBold",
    marginTop: 10,
    marginBottom: 10,
  },
  value: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "DMMedium",
    marginBottom: 15,
  },

  input: {
    fontSize: 16,
    fontFamily: "DMRegular",
    marginBottom: 20,
    height: 50,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
  },

  placeCenter: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    flexDirection: "column",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    width: 100,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
  },

  buttonActive: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    width: 100,
    borderRadius: 20,
    backgroundColor: "#01AD02",
  },

  buttonText: {
    fontSize: 16,
    fontFamily: "DMMedium",
    color: "#fff",
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
    textAlign: "center"
  },
  headerLeft: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "DMBold",
  },
});

const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
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
          headerLeft: () => (
            <Text style={styles.headerLeft}>Lipeunim&gt;&gt;&gt;</Text>
          ),
          headerRight: () => <ScreenHeaderPic dimension="100%" />,
          headerTitle: "",
        }}
      />
      <Text style={styles.greeting}>Hi dear 👋</Text>
      <Text style={styles.value}>Kindly input your name</Text>

      <View style={styles.placeCenter}>
        <TextInput
          style={styles.input}
          theme={{ roundness: 8, colors: { text: "#f09a36" } }}
          mode="outlined"
          label=""
          editable
          placeholder="Type here..."
          placeholderTextColor={"#f09a36"}
          selectionColor={"#f09a36"}
          outlineColor={"#f09a36"}
          activeOutlineColor={"#f09a36"}
          onChangeText={(text) => {
            setInput(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            if (input) {
              setLoading(true);
            }
          }}
          style={input == "" ? styles.button : styles.buttonActive}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {loading && (
          <View style={styles.placeCenter}>
            <Text style={styles.welcome}>Welcome {input} 🥰</Text>
            <Text style={styles.deviceProp}>
              {Device.manufacturer}: {Device.modelName}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
