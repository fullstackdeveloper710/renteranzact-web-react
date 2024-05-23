import { Box, Container, Stack, Typography } from "@mui/material";
import SupportImg from "../../../assets/images/support.png";
import React from "react";
import { theme } from "../../../assets/theme";
import { ArrowRightIcon } from "../../../assets/icons";

export default function Support() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography
          fontSize={40}
          fontWeight={700}
          color={theme.palette.text.primary}
          marginTop={"30px"}
        >
          Support
        </Typography>
      </Box>
      <Box textAlign={"center"} margin={"40px"}>
        <img src={SupportImg} />
        <Typography fontSize={28} fontWeight={700} color={"#13556D"} marginTop={"20px"}>
          Hello, How can we help you?
        </Typography>{" "}
        <Typography
          fontSize={20}
          fontWeight={400}
          color={"#596E73"}
          margin={"20px"}
        >
          If you need instant support then use chat option to reach us quickly.
          Our Support will reply as soon as possible after you send us a
          message.
        </Typography>
      </Box>
      <Stack>
        <div className="d-flex pb-3 justify-content-center">
          <button
            style={{
              width: "336px",
              height: "51px",
              borderRadius: "10px",
              marginRight: "70px",
              color: "#13556D",
              border: "1px solid #E6E9EA",
            }}
          >
            <span>
              <img src="" alt="no" />
              <span>Chat With Support</span>
            </span>

            <span>{ArrowRightIcon()} </span>
          </button>
          <button
            style={{
              width: "336px",
              color: "#13556D",
              height: "51px",
              borderRadius: "10px",
              border: "1px solid #E6E9EA",
            }}
          >
          <span>
              <img src="" alt="no" />
              <span>FAQ</span>
            </span>
            <span>{ArrowRightIcon()} </span>
          </button>
        </div>
      </Stack>
    </Container>
  );
}
