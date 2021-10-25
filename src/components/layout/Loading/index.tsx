import React, { FC } from "react";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "@react-navigation/native";
import { styles } from "./styles";

const Loading: FC = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size={50} />
    </View>
  );
};

export default Loading;
