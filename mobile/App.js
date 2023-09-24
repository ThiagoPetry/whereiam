import { StatusBar } from "expo-status-bar";

import { WebView } from "react-native-webview";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <>
      <WebView
        style={styles.container}
        source={{ uri: "https://thiagopetry.github.io/whereiam/" }}
      />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  webview: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
});

export default App;
