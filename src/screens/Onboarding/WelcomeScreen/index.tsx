import React from "react";
import { View, Text } from "react-native";
import { OnboardingStackNavProps } from "../../../navigation/OnboardingStack";

import { styles } from "./styles";

const WelcomeScreen = ({
  navigation,
}: OnboardingStackNavProps<"WelcomeScreen">) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => navigation.push("CountrySelectionScreen")}
        style={{ color: "#fff" }}
      >
        Next{" "}
      </Text>
    </View>
  );
};

export default WelcomeScreen;
