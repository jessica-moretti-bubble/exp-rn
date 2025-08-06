import { InputStatus } from "@/types/model/generic-input.model";

export const INPUT_CONFIG = {
  MAX_LENGTH: 160,
  PLACEHOLDER_TEXT_COLOR: "#aaa",
  BACKGROUND_COLOR: "rgba(128, 128, 128, 0.2)",

  COLORS: {
    BORDER: {
      success: "#BAF7CD",
      error: "#EF6464",
      default: "#80808033",
      focused: "rgba(128, 128, 128, 0.8)",
    },
    TEXT: {
      success: "#BAF7CD",
      error: "#EF6464",
      default: "#fff",
    },
  },

  getBorderColor: (status: InputStatus, isFocused: boolean): string => {
    const { BORDER } = INPUT_CONFIG.COLORS;

    if (status === "success") return BORDER.success;
    if (status === "error") return BORDER.error;
    return isFocused ? BORDER.focused : BORDER.default;
  },

  getTextColor: (status: InputStatus): string => {
    const { TEXT } = INPUT_CONFIG.COLORS;

    return TEXT[status] ?? TEXT.default;
  },
};
