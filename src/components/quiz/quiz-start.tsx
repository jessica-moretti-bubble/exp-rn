import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IconPlayCircle from "src/components/svg/icon-play-circle";

interface QuizStartProperties {
  setPlayQuiz: (value: boolean) => void;
}

export const QuizStart = ({ setPlayQuiz }: QuizStartProperties) => {
  return (
    <>
      <View>
        <Text style={styles.startDateText}>Oggi - 20:00</Text>
        <Text style={styles.quizText}>Nome quiz</Text>
      </View>
      <Text style={styles.quizDescription}>
        Lorem ipsum dolor sit amet consectetur. Neque sed integer lobortis ipsum
        eget. Consequat feugiat non urna mauris neque interdum amet mauris quis.
        Auctor sit tristique praesent fringilla id quis quis.
      </Text>
      <TouchableOpacity onPress={() => setPlayQuiz(true)}>
        <ImageBackground
          source={require("../../assets/images/quiz/play-quiz-texture.png")}
          style={styles.button}
          imageStyle={styles.buttonImage}
        >
          <IconPlayCircle />
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  startDateText: {
    color: "#BAF7CD",
    fontSize: 22,
    lineHeight: 35.2,
  },
  quizText: {
    color: "#F4CEF0",
    fontSize: 32,
    lineHeight: 41.6,
    fontWeight: "700",
  },
  quizDescription: {
    color: "#D6FBDA",
    fontSize: 16,
    lineHeight: 24,
  },

  button: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonImage: {
    borderRadius: 999,
  },
});
