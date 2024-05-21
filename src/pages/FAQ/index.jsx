import React, { useState } from "react";
import faqBanner from "../../assets/images/faqBanner.png";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { theme } from "../../assets/theme";
import { DownIcon, UpIcon } from "../../assets/icons";
const tabs = [
  "General",
  "Service",
  "Payments",
  "Rent",
  "Add Property",
  "Refund",
];
const FAQ = () => {
  const [value, setValue] = useState("General");
  const [collapseOpen, setCollapseOpen] = useState(true);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
        display={"flex"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${faqBanner})`,
          width: "100%",
          backgroundSize: "cover",
          height: 497,
        }}
      >
        <div>
          <Typography
            fontSize={56}
            fontWeight={"bold"}
            color={theme.palette.text.primary}
          >
            Frequently
            <br /> Asked Questions
          </Typography>
          <Typography fontSize={24} color={theme.palette.text.secondary}>
            Answers at your fingertips: Navigating the FAQs for
            <br /> clarity and confidence.
          </Typography>
        </div>
      </Box>
      <Container maxWidth="xl">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              FAQ’s
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Have Any Questions?
          </Typography>

          <div>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="mt-3"
              TabIndicatorProps={{
                style: { background: "gray", color: "red" },
              }}

              //   indicatorColor="blue"
            >
              {tabs.map((x, i) => {
                return (
                  <Tab
                    key={i}
                    sx={{
                      "&.Mui-selected": {
                        color: "#13556D",
                      },
                      textTransform: "none",
                      fontSize: 24,
                      fontWeight: value === x ? "bold" : "",
                      color: "#13556D",
                    }}
                    label={x}
                    value={x}
                  />
                );
              })}
            </Tabs>
          </div>

        <div  className="my-5">
             <Card
            elevation={0}
            sx={{ width: 1107, border: "1px solid #E3E3E3", background : "#FCFCFC"}}
           
          >
            <CardHeader
              component={() => (
                <div className=" d-flex justify-content-between align-items-center p-3">
                  <Typography fontSize={18} color="#141B34" fontWeight={500}>
                    Fames imperdiet neque lacus urna egestas pretium tristique
                    malesuada.
                  </Typography>
                  <IconButton onClick={() => setCollapseOpen(!collapseOpen)}>
                    {collapseOpen ? <DownIcon /> : <UpIcon />}
                  </IconButton>
                </div>
              )}
            />
            <Divider
              sx={{
                background: "#E3E3E3",
              }}
            />

            <Collapse in={collapseOpen}>
              <CardContent>
                <Typography color="#626677" fontSize={18}>
                  Dolor ipsum feugiat suspendisse dui habitasse. Pellentesque
                  velit cursus velit eleifend iaculis. Arcu eu interdum posuere
                  mauris et. Nisl a a diam habitasse quis non nunc eget.
                  Placerat massa imperdiet nec volutpat imperdiet sollicitudin
                  faucibus ut lobortis. Et quisque elit quis scelerisque sed at.
                  Dui potenti elit fermentum facilisi aliquam. Vestibulum elit
                  nunc porttitor nibh et etiam velit arcu metus.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>

          <Card
            elevation={0}
            sx={{ width: 1107, border: "1px solid #E3E3E3" , background : "#FCFCFC"}}
            className="mt-4"
          >
            <CardHeader
              component={() => (
                <div className=" d-flex justify-content-between align-items-center p-3">
                  <Typography fontSize={18} color="#141B34" fontWeight={500}>
                  Vel purus volutpat venenatis suspendisse.
                  </Typography>
                  <IconButton onClick={() => setCollapse2(!collapse2)}>
                    {collapse2 ? <DownIcon /> : <UpIcon />}
                  </IconButton>
                </div>
              )}
            />
            <Divider
              sx={{
                background: "#E3E3E3",
              }}
            />

            <Collapse in={collapse2}>
              <CardContent>
                <Typography color="#626677" fontSize={18}>
                  Dolor ipsum feugiat suspendisse dui habitasse. Pellentesque
                  velit cursus velit eleifend iaculis. Arcu eu interdum posuere
                  mauris et. Nisl a a diam habitasse quis non nunc eget.
                  Placerat massa imperdiet nec volutpat imperdiet sollicitudin
                  faucibus ut lobortis. Et quisque elit quis scelerisque sed at.
                  Dui potenti elit fermentum facilisi aliquam. Vestibulum elit
                  nunc porttitor nibh et etiam velit arcu metus.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
            </div>  
            
           
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
