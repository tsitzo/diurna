import React, { FC } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";

import moment from "moment";

import Spacer from "../../layout/Spacer";
import Typography from "../../text/Typography";
import BookmarkButton from "../BookmarkButton";

import { News } from "../../../types/types";
import { styles } from "./styles";

interface INewsPanelProps {
  news: News;
}

const { height } = Dimensions.get("window");

const NewsPanel: FC<INewsPanelProps> = ({ news }) => {
  const bottomBarHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const { colors } = useTheme();
  return (
    <View
      style={{
        height: height - bottomBarHeight - insets.top,
      }}
    >
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.card }]}
        onPress={() => WebBrowser.openBrowserAsync(news.url)}
      >
        <ImageBackground
          source={{ uri: news.urlToImage }}
          style={styles.image}
          resizeMode="cover"
        >
          <LinearGradient
            style={{ height: "100%", justifyContent: "flex-end", padding: 10 }}
            colors={[colors.transparent, colors.card]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.titleWrapper}>
              <Typography variant="xl">{news.title.split(" - ")[0]}</Typography>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.bottomCard}>
          <Typography>{news.description}</Typography>
          <Spacer y={20} />
          <View style={styles.buttonRow}>
            <Typography color="subtext">
              {news.source?.name} - {moment(news.publishedAt).fromNow()}
            </Typography>
            <BookmarkButton news={news} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsPanel;
