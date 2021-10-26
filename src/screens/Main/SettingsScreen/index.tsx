import React, { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  Switch,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import SafeArea from "../../../components/layout/SafeArea";
import Spacer from "../../../components/layout/Spacer";
import Typography from "../../../components/text/Typography";

import { ThemeContext } from "../../../context/Theme.context";
import { MainStackNavProps } from "../../../navigation/MainStack";

import { styles } from "./styles";
import { useTheme } from "@react-navigation/native";

const SettingsScreen = ({ navigation }: MainStackNavProps<"MainTabs">) => {
  const { isDarkTheme, switchTheme } = useContext(ThemeContext);
  const { colors } = useTheme();
  return (
    <SafeArea>
      <ScrollView style={styles.scrollWrapper}>
        <Spacer y={20} />

        <TouchableOpacity style={styles.row}>
          <Typography>Select Country</Typography>
          <Entypo name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row}>
          <Typography>Select Categories</Typography>
          <Entypo name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
        <View style={styles.row}>
          <Typography>Dark Mode</Typography>
          <Switch
            value={isDarkTheme}
            onValueChange={switchTheme}
            trackColor={{ true: colors.primary, false: colors.border }}
          />
        </View>
        <Spacer y={20} />

        <TouchableOpacity style={styles.row}>
          <Typography>Bookmarked Articles</Typography>
          <Entypo name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>

        <Spacer y={20} />

        <TouchableOpacity style={styles.row}>
          <Typography>About</Typography>
          <Entypo name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
      </ScrollView>
    </SafeArea>
  );
};

export default SettingsScreen;
