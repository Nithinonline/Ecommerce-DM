import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
import Cart from './Cart';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const ProductList = () => {
    const { addItemToCart } = useContext(CartContext)

    const [productList, setProductList] = useState([])


    const getProducts = async () => {
        await axios
            .get("http://localhost:5500/api/product/allProducts")
            .then((res) => setProductList(res.data.Products))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getProducts()
    }, [])

  

    const addItemToCartHandler = (product) => {
        addItemToCart(product);      
    };



    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "5vh",
            marginTop: "20px",

        }}>

            {productList &&
                productList.map((item, index) => {
                    return (
                        <>
                            <Card sx={{
                                width: 320,
                                minWidth: "320px",
                                margin: "10px"
                            }}
                            
                            >
                                <div>
                                    <Typography level="title-lg">{item.name}</Typography>
                                    <Typography level="body-xs">{item.category}</Typography>
                                    <Typography level="body-sm">{item.description}</Typography>

                                    <IconButton
                                        aria-label="bookmark Bahamas Islands"
                                        variant="plain"
                                        color="neutral"
                                        size="sm"
                                        sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                                    >
                                    </IconButton>
                                </div>
                                <AspectRatio minHeight="120px" maxHeight="200px">
                                    <img
                                        src={item.image_Url}
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <CardContent orientation="horizontal">
                                    <div>
                                        <Typography level="body-xs">Total price:</Typography>
                                        <Typography fontSize="lg" fontWeight="lg">
                                            ${item.price}
                                        </Typography>
                                    </div>
                                    <Button
                                        variant="solid"
                                        size="md"
                                        color="primary"
                                        aria-label="Explore Bahamas Islands"
                                        sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                                        onClick={()=>addItemToCartHandler(item)}

                                    >
                                        Add to Cart
                                    </Button>
                                </CardContent>
                            </Card>
                        </>
                    )
                })
            }
        </div>
    );
}


export default ProductList