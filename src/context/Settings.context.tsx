import React, { FC, useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Category } from "../types/types";
import { categories } from "../data/categories";

type SettingsContextState = {
  categories: Category[];
  selectedCategories: Category[];
  selectedCountry: string;
  isFirstVisit: boolean;
  addCategory: (category: Category) => void;
  removeCategory: (category: Category) => void;
  selectCountry: (country: string) => void;
  setFirstVisitFalse: () => void;
};

const contextDefaultValue: SettingsContextState = {
  categories: categories,
  selectedCategories: [] as Category[],
  selectedCountry: "",
  isFirstVisit: true,
  selectCountry: () => {},
  addCategory: () => {},
  removeCategory: () => {},
  setFirstVisitFalse: () => {},
};

export const SettingsContext =
  createContext<SettingsContextState>(contextDefaultValue);

export const SettingsContextProvider: FC = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    contextDefaultValue.selectedCountry
  );

  const [categories, setCategories] = useState<Category[]>(
    contextDefaultValue.categories
  );

  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    contextDefaultValue.selectedCategories
  );

  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(
    contextDefaultValue.isFirstVisit
  );

  const addCategory = (category: Category) => {
    setSelectedCategories([...selectedCategories, category]);
  };

  const removeCategory = (category: Category) => {
    setSelectedCategories(
      selectedCategories.filter((c) => c.name !== category.name)
    );
  };

  const selectCountry = (country: string) => setSelectedCountry(country);

  const setFirstVisitFalse = () => {
    setIsFirstVisit(false);
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

  const loadSelectedCountry = async () => {
    try {
      const value = await AsyncStorage.getItem("@diurna/selectedCountry");
      if (value !== null) {
        setSelectedCountry(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveSelectedCountry = async (value: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@diurna/selectedCountry", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const saveFirstVisit = async (value: boolean) => {
    try {
      const jsonValue = value === true ? "true" : "false";
      await AsyncStorage.setItem("@diurna/firstVisit", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadFirstVisit = async () => {
    try {
      const value = await AsyncStorage.getItem("@diurna/firstVisit");

      if (value === "true") {
        setIsFirstVisit(true);
      } else if (value === "false") {
        setIsFirstVisit(false);
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadSelectedCountry();
  }, []);

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadFirstVisit();
  }, []);

  useEffect(() => {
    saveSelectedCountry(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    saveFirstVisit(isFirstVisit!);
  }, [isFirstVisit]);

  useEffect(() => {
    saveCategories(selectedCategories!);
  }, [selectedCategories]);
  return (
    <SettingsContext.Provider
      value={{
        selectedCountry,
        categories,
        selectedCategories,
        isFirstVisit,
        selectCountry,
        addCategory,
        removeCategory,
        setFirstVisitFalse,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
