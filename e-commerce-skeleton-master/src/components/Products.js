import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Products() {
  const{categoryName}=useParams();
  const {ProductData,setProductsData}=useState([]);
  useState
  useEffect(()=>{
    axios.get("https://dummyjson.com/products/categories/${categoryName}")
  .then((res)=>{
    console.log(res.data.Products);
    setProductsData(res.data.Products);

  })

  .catch((err)=>{
    console.log(err);

  });   
},[]);
  

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {ProductData.map((Product)=>(

        
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            width="200"
            image={Product?.thumbail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {Product.title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {Product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {Product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography variant="h5">₹price</Typography>

            <Typography
              variant="h5"
              style={{ textAlign: "end", width: "100%" }}
            >
              {Product.brand}
            </Typography>
          </CardActions>
        </Card>
        ))}
      </Grid>
    </div>
  );
}

export default Products;
