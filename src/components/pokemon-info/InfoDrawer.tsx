import { Global } from "@emotion/react";
import { Box, CssBaseline, SwipeableDrawer, Typography } from "@mui/material";
import React from "react";
import { PokemonInfo } from ".";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setDrawer } from "../../redux/slice";
import { IPokemonInfo } from "../../types";

interface Props {
  info: IPokemonInfo;
}

const drawerBleeding = 56;

export const InfoDrawer: React.FC<Props> = ({ info }) => {
  const dispatch = useAppDispatch();
  const { isOpenDrawer } = useAppSelector((state) => state.pokemon);

  const toggleDrawer = (isOpen: boolean) => () => {
    dispatch(setDrawer(isOpen));
  };

  return (
    <Box sx={{ height: "100%" }}>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(100% - ${drawerBleeding * 2}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        anchor="bottom"
        open={isOpenDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            bgcolor: "aliceblue",
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 6,
              backgroundColor: "primary.light",
              borderRadius: 3,
              position: "absolute",
              top: 8,
              left: "calc(50% - 15px)",
            }}
          />
          <Typography sx={{ p: 2, color: "primary.dark" }}>
            {info.name}
          </Typography>
        </Box>
        <Box sx={{ p: 3, overflow: "auto" }}>
          <PokemonInfo pokemon={info} />
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};
