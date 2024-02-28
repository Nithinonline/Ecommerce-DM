import React, { useState } from 'react';
import {
    Badge,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemAvatar,
    Avatar,
    ListItemButton,
} from '@mui/material';

const Cart = ({ isOpen, handleClose }) => {
    // Replace this with your actual cart items data
    const cartItems = [
        { id: 1, name: 'Item 1', price: 10, image_Url: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.98259409.1709078400&semt=sph",Quantity:2 },
        { id: 2, name: 'Item 2', price: 15, image_Url: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.98259409.1709078400&semt=sph",Quantity:4 },
        { id: 3, name: 'Item 3', price: 20, image_Url: "https://img.freepik.com/free-photo/smartphone-balancing-with-pink-background_23-2150271746.jpg?size=338&ext=jpg&ga=GA1.1.98259409.1709078400&semt=sph",Quantity:1 },
    ];

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <Drawer anchor="right" open={isOpen} onClose={handleClose}>
            <List sx={{ width: 300,
             }}>
                <ListItem>
                    <Typography variant="h6">Shopping Cart</Typography>
                </ListItem>
                {cartItems.map((item) => (
                    <ListItem key={item.id}>
                        <ListItemAvatar>
                            <Avatar alt={item.name} src={item.image_Url} />
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={`$${item.price}`} />
                        <ListItemText>Qty: {item.Quantity}</ListItemText>
                    </ListItem>
                ))}
                <ListItem>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Total: ${totalPrice}
                    </Typography>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Cart;
