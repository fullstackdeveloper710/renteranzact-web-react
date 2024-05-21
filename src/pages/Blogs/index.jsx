import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import blogBanner from "../../assets/images/blogbanner.png";
import { theme } from "../../assets/theme";
import blog1 from "../../assets/images/blog1.png";
import Blog from "../../components/Blog";
const blogs = [
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
  {
    title: "Housing Bubble 2024: Are Housing Markets Crashing?",
    date: "24 Jan 2024",
    img: blog1,
  },
];
const Blogs = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        px={6}
        alignItems={"center"}
        sx={{
          backgroundImage: `url(${blogBanner})`,
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
            Blog
          </Typography>
          <Typography fontSize={24} color={theme.palette.text.secondary}>
            Turning spaces into homes, dreams into reality. Your
            <br /> streamline trusted partner in real estate excellence.
          </Typography>
        </div>
      </Box>
      <Container maxWidth={"xl"}>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="d-flex align-items-center gap-2 mt-5">
            <hr style={{ border: "1px solid #008F97", width: 40 }} />
            <Typography color="#009DA6" fontSize={24}>
              Blogs
            </Typography>
          </div>
          <Typography
            fontSize={40}
            fontWeight={500}
            color={theme.palette.text.primary}
          >
            Explore, Engage, Empower: Unveiling Insights in Every Blog.
          </Typography>
        </div>
        <div className="d-flex justify-content-between align-items-center  mt-4">
          <Typography
            fontSize={24}
            color={theme.palette.text.primary}
            fontWeight={500}
          >
            Blogs
          </Typography>
          <FormControl>
            <InputLabel>Sort By</InputLabel>
            <Select
              sx={{ width: 275, borderColor: "#DBDBDB" }}
              label="Sort By"
              placeholder="Sort By"
            ></Select>
          </FormControl>
        </div>
        <Grid container spacing={3} mt={3} mb={5}>
          {blogs.map((x, index) => {
            return (
              <Grid item md={4}>
                <Blog
                  {...x}
                  key={index}
                  img={require(`../../assets/images/blog${index + 1}.png`)}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Blogs;
