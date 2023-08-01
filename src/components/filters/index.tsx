import { Box, Chip } from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";

interface Props {
  filters: string[];
  handleClik: (value: string) => void;
}

export const Filters: React.FC<Props> = ({ filters, handleClik }) => {
  return (
    <Box sx={{ mb: 4 }}>
      {filters.map((filter: string) => (
        <Chip
          key={uuid()}
          label={filter}
          variant="outlined"
          color="primary"
          onDelete={() => handleClik(filter)}
        />
      ))}
    </Box>
  );
};
