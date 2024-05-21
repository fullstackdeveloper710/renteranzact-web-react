import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Blog = ({ img, title, date }) => {
  const navigate = useNavigate();
  return (
    <Card elevation={0} sx={{ border: "1px solid #DBDBDB" }}>
      <CardMedia sx={{ height: 329 }} image={img} />
      <CardContent>
        <Typography variant="body2" component="div" color={"#8D9B9F"}>
          {date}
        </Typography>
        <Typography
          className="mt-2"
          variant="body2"
          color="text.primary"
          fontSize={18}
          fontWeight={500}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          style={{ color: "#009DA6", textTransform: "none" }}
          onClick={() => navigate("/blog-detail", { state: img })}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Blog;
