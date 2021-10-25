import React, { FC } from "react";
import moment from "moment";
import { View, TouchableOpacity, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { News } from "../../../types/types";
import Spacer from "../../layout/Spacer";
import Typography from "../../text/Typography";

import { styles } from "./styles";

interface INewsCardProps {
  news: News;
}

const NewsCard: FC<INewsCardProps> = ({ news }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: colors.card }]}>
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
          <Typography>
            {moment(news.publishedAt).fromNow()} - {news.source?.name}
          </Typography>
        </View>
      </View>
      <View style={styles.bookmarkButtonContainer}>
        <AntDesign name="book" size={24} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
