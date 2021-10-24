import React, { FC } from "react";
import { TextProps, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

import { styles } from "./styles";

interface ITypographyProps extends TextProps {
  variant?: "xs" | "sm" | "md" | "lg" | "xl" | "selectionTile" | "fabText";
  color?: "text" | "primary";
}

const Typography: FC<ITypographyProps> = ({
  children,
  variant = "sm",
  color = "text",
  ...rest
}) => {
  const { colors } = useTheme();
  const textStyles = [styles.root, styles[variant]];
  return (
    <Text style={[{ color: colors[color] }, textStyles]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
