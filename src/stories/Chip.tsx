import React, { ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import { CloseIcon } from "../components/CloseIcon";

export interface ChipProps {
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Calls the function when the delete icon is clicked */
  onDelete?: () => void;
}

const SIZES = {
  small: {
    "--fillPaddingX": 16 + "px",
    "--fillPaddingY": 4 + "px",
    "--fontSize": 14 + "px",
    "--iconHeight": 18 + "px",
    "--iconWidth": 18 + "px",
  },
  medium: {
    "--fillPaddingX": 20 + "px",
    "--fillPaddingY": 6 + "px",
    "--fontSize": 16 + "px",
    "--iconHeight": 18 + "px",
    "--iconWidth": 18 + "px",
  },
  large: {
    "--fillPaddingX": 24 + "px",
    "--fillPaddingY": 8 + "px",
    "--fontSize": 18 + "px",
    "--iconHeight": 20 + "px",
    "--iconWidth": 20 + "px",
  },
};

/** Primary UI component for user interaction */
export const Chip = ({
  size = "medium",
  label,
  onDelete,
  ...props
}: ChipProps) => {
  const styles = SIZES[size];

  // if onDelete function is provided and no deleteIcon is provided,
  // the delete Icon will be defaulted to the one from the design.
  // Callback fired when the delete icon is clicked. If set, the delete icon will be shown.

  return (
    <Wrapper style={styles} {...props}>
      {label}
      {onDelete && (
        <DismissChipButton onClick={onDelete}>
          <CloseIcon
            height={styles["--iconHeight"]}
            width={styles["--iconWidth"]}
          />
        </DismissChipButton>
      )}
    </Wrapper>
  );
};

const DismissChipButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
`;

const Wrapper = styled.div`
  background-color: ${COLORS["neutral7"]};
  border-radius: 24px;
  display: flex;
  align-items: center;
  gap: 4px;

  padding: var(--fillPaddingY) var(--fillPaddingX);
  font-family: "Source Sans 3", sans-serif;
  font-weight: 600; // semibold
  font-size: var(--fontSize);
`;
