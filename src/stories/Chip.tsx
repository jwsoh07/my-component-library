import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

export interface ChipProps {
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
}

const SIZES = {
  small: {
    "--fillPaddingX": 26 + "px",
    "--fillPaddingY": 4 + "px",
    "--fontSize": 14 + "px",
  },
  medium: {
    "--fillPaddingX": 30 + "px",
    "--fillPaddingY": 6 + "px",
    "--fontSize": 16 + "px",
  },
  large: {
    "--fillPaddingX": 34 + "px",
    "--fillPaddingY": 8 + "px",
    "--fontSize": 18 + "px",
  },
};

/** Primary UI component for user interaction */
export const Chip = ({ size = "medium", label, ...props }: ChipProps) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={styles} {...props}>
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS["neutral7"]};
  border-radius: 24px;
  padding: var(--fillPaddingY) var(--fillPaddingX);
  font-family: "Source Sans 3", sans-serif;
  font-weight: 600; // semibold
  font-size: var(--fontSize);
`;
