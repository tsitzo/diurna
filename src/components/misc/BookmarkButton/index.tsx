import React, { FC, useContext } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { BookmarksContext } from "../../../context/Bookmarks.context";
import { News } from "../../../types/types";

interface IBookmarkButtonProps {
  news: News;
  size?: number;
}

const BookmarkButton: FC<IBookmarkButtonProps> = ({ news, size = 22 }) => {
  const { bookmarks, addToBookmarks, removeFromBookmarks } =
    useContext(BookmarksContext);
  const { colors } = useTheme();
  const isBookmark = bookmarks.find((bookmark) => bookmark.url === news.url);
  return (
    <TouchableOpacity
      onPress={() =>
        isBookmark ? removeFromBookmarks(news) : addToBookmarks(news)
      }
    >
      <Ionicons
        name={isBookmark ? "bookmark" : "bookmark-outline"}
        size={size}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
