import React, { FC } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

import Spacer from "../../layout/Spacer";
import Typography from "../../text/Typography";
import BookmarkButton from "../BookmarkButton";

import { News } from "../../../types/types";
import { styles } from "./styles";

interface INewsCardProps {
  news: News;
}

const NewsCard: FC<INewsCardProps> = ({ news }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card }]}
      onPress={() => WebBrowser.openBrowserAsync(news.url)}
    >
      <View style={styles.imageContainer}>
        {news.urlToImage ? (
          <Image source={{ uri: news.urlToImage }} style={styles.image} />
        ) : (
          <Image
            style={styles.placeholderImage}
            source={require("../../../../assets/newspaper.png")}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Typography variant="cardTitle">{news.title}</Typography>
        <Spacer y={10} />
        <View>
          <Typography color="subtext">
            {moment(news.publishedAt).fromNow()} - {news.source?.name}
          </Typography>
        </View>
      </View>
      <View style={styles.bookmarkButtonContainer}>
        <BookmarkButton news={news} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
