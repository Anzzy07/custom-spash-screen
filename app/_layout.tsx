import { Stack } from "expo-router";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SplashScreen from "./SpalshScreen";

export default function RootLayout() {
  const [appState, setAppState] = useState<"loading" | "splash" | "ready">(
    "splash"
  );

  const handleReady = () => {
    setAppState("ready");
  };

  if (appState === "splash") {
    return <SplashScreen onReady={handleReady} />;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
