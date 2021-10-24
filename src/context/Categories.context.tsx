import React, { FC, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Category } from "../types/types";

type CategoriesContextState = {
  categories: Category[];
  selectedCategories: Category[] | [];
  addCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
};

const contextDefaultValue: CategoriesContextState = {
  categories: [],
  selectedCategories: [],
  addCategory: () => {},
  removeCategory: () => {},
};

export const CategoriesContext =
  createContext<CategoriesContextState>(contextDefaultValue);

export const CategoriesContextProvider: FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>(
    contextDefaultValue.categories
  );

  const [selectedCategories, setSelectedCategories] = useState<Category[] | []>(
    contextDefaultValue.selectedCategories
  );

  const addCategory = (category: Category) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  const removeCategory = (category: Category) => {
    setSelectedCategories(
      selectedCategories.filter((c) => c.name !== category.name)
    );
  };

  const loadCategories = async () => {
    try {
      const value = await AsyncStorage.getItem("@diurna/selectedCategories");
      if (value !== null) {
        setSelectedCategories(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveCategories = async (value: Category[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@diurna/selectedCategories", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    saveCategories(selectedCategories!);
  }, [selectedCategories]);

  return (
    <CategoriesContext.Provider
      value={{ categories, selectedCategories, addCategory, removeCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
