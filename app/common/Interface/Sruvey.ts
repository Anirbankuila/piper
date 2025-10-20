import { TextInputProps } from "react-native";

export interface CategoryWiseSurvey {
  categoryName: string;
  bannerImage: any;
  title: string;
  description: string;
  questions: Questions[];
  headerTitle: string;
  bannerPageTitle: string;
}
export interface Questions {
  id: number;
  question: string;
  options: string[];
  isMultipleSelection?: boolean;
  isInputEnable?: boolean;
  inputPlaceholder?: string;
  inputType?: TextInputProps["keyboardType"];
}
