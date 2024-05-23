import {
  Box,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  SearchIcon,
  eyeViewIcon,
  removeIcon,
  uploadIcon,
} from "../../../assets/icons";
import { theme } from "../../../assets/theme";
import ButtonComponent from "../../../components/Button";
import "./index.css";
import uploadPdf from "../../../assets/images/uploadpdf.png";
import uploadDots from "../../../assets/icons/menuDot.png";

export default function LeaseAgrement() {
  const [dropdownShow, setDropdwonShow] = useState(false);
  return (
    <Container maxWidth={"xl"}>
      <Box>
        <Typography
          fontSize={40}
          fontWeight={700}
          color={theme.palette.text.primary}
          marginBottom={"20px"}
        >
          Lease Agreement
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6} marginBottom={"24px"}>
            <Typography
              fontSize={24}
              fontWeight={600}
              color={theme.palette.text.secondary}
              marginBottom={"10px"}
            >
              Upload file
            </Typography>
            <Box
              bgcolor={"#13556D"}
              borderRadius={"10px"}
              className="text-center p-4"
            >
              <Typography fontSize={20} fontWeight={500} color={"#FFFFFF"}>
                Upload Agreement form
              </Typography>
              <div className="">
                <label className="uploadImg" htmlFor="upload">
                  {uploadIcon()}
                  <Typography
                    marginTop={"10px"}
                    marginBottom={"10px"}
                    fontSize={14}
                    fontWeight={400}
                    color={"#596E73"}
                  >
                    Upload the document
                  </Typography>
                </label>
                <input
                  style={{ visibility: "hidden" }}
                  id="upload"
                  type="file"
                />
              </div>
              <ButtonComponent title={"Upload"} sx={{ width: "115px" }} />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            marginBottom={"24px"}
            style={{ paddingLeft: "37px" }}
          >
            <Typography
              fontSize={24}
              fontWeight={600}
              color={theme.palette.text.secondary}
              marginBottom={"10px"}
            >
              Uploaded Files
            </Typography>
            <Box className="text-start">
              <div className="position-relative">
                <img src={uploadPdf} alt="pdfsimage" />
                <div
                  className="d-inline"
                  style={{ position: "absolute", top: "4px", left: "174px" }}
                >
                  <img
                    src={uploadDots}
                    alt="dotsimage"
                    onClick={() => setDropdwonShow(!dropdownShow)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                {dropdownShow ? (
                  <div className="border position-absolute rounded d-inline-block p-2">
                    <span className="d-block spanImg">{eyeViewIcon()}View</span>
                    <span className="d-block spanImg">{removeIcon()} Remove</span>
                  </div>
                ) : null}
              </div>
              <Typography
                fontSize={14}
                fontWeight={400}
                color={"#395158"}
                marginTop={"10px"}
              >
                Delight Apartments.pdf
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
