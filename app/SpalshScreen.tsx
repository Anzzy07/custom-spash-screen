import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface SplashScreenProps {
  onReady: () => void;
}

export default function SplashScreen({ onReady }: SplashScreenProps) {
  const [hasCalledOnReady, setHasCalledOnReady] = useState(false);

  const splashData = {
    timer: 4,
  };

  useEffect(() => {
    const splashDuration = splashData.timer * 1000;
    if (!hasCalledOnReady) {
      setTimeout(() => {
        console.log("SplashScreen calling onReady");
        onReady();
        setHasCalledOnReady(true);
      }, splashDuration);
    }
  }, [onReady, hasCalledOnReady]);

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/SplashImg.png")}
        style={styles.image}
        contentFit="cover"
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Find Skilled</Text>
        <Text style={styles.heading}>Professionals</Text>
        <Text style={styles.subtitle}>Over 150+ categories.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>EXPLORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "#fff",
    textAlign: "left",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    position: "absolute",
    top: 20,
    left: 20,
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: 29,
    fontWeight: "900",
    color: "#fff",
    textAlign: "left",
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "absolute",
    top: 55,
    left: 20,
    fontFamily: "sans-serif",
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    position: "absolute",
    bottom: 170,
    fontFamily: "sans-serif",
    alignSelf: "center",
  },
  button: {
    position: "absolute",
    bottom: 60,
    alignSelf: "center",
    backgroundColor: "#d8d8d8",
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 15,
    fontFamily: "sans-serif",
    elevation: 2,
    letterSpacing: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000",
    textAlign: "center",
  },
});
