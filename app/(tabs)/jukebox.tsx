import { JukeboxBackground } from "components/jukebox/jukebox-background";
import { JukeboxChallengeCard } from "components/jukebox/jukebox-challenge-card";
import { JukeboxSpin } from "components/jukebox/jukebox-spin";
import { JukeboxVinylsSlider } from "components/jukebox/jukebox-vinyls-slider";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const background = require("../../assets/images/background/bubble-bg.png");

export default function JukeboxPage() {
  const [scale, setScale] = useState(1);
  const [overlayVisible, setOverlayVisible] = useState(true);

  //const logout = useAuthStore((s) => s.logout);


  const zoomIn = () => {
    setScale(2);
    setOverlayVisible(false);
  };


  /*useEffect(() => {
    logout()
  },[])*/

  return (
    <ImageBackground source={background} style={styles.root} resizeMode="cover">
      {overlayVisible && (
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={zoomIn}
        />
      )}
      {overlayVisible && <JukeboxChallengeCard />}

      <View style={styles.innerContainer}>
        <JukeboxBackground zoomIn={zoomIn} scale={scale} />
        <JukeboxSpin scale={scale} />
        <JukeboxVinylsSlider scale={scale} />
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  innerContainer: {
    width: 370,
    height: 844,
    alignSelf: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 100,
  },
});
