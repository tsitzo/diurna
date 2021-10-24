import React from "react";
import { View, Text } from "react-native";
import SafeArea from "../../../components/layout/SafeArea";
import { OnboardingStackNavProps } from "../../../navigation/OnboardingStack";

import { styles } from "./styles";

const CountrySelectionScreen = ({
  navigation,
}: OnboardingStackNavProps<"CountrySelectionScreen">) => {
  return (
    <SafeArea>
      <View>
        <View></View>
        <View></View>
      </View>
    </SafeArea>
  );
};

export default CountrySelectionScreen;
