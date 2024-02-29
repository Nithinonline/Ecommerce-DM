import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemAvatar,
    Avatar,
    Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = ({ isOpen, handleClose }) => {

    const { addItemToCart, cartTotal, cartItems, removeItemFromCart,clearItemFromCart } = useContext(CartContext)


    console.log(cartItems)

    return (
        <Drawer anchor="right" open={isOpen} onClose={handleClose}>
            <List sx={{
                width: 300,
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

                        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                            <RemoveIcon onClick={() => removeItemFromCart(item)} />
                            <ListItemText>Qty: {item.quantity}</ListItemText>
                            <AddIcon onClick={() => addItemToCart(item)} />
                        </div>
                    </ListItem>
                ))}
                <ListItem>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        Total: ${cartTotal}
                    </Typography>
                </ListItem>
            </List>

            <Button  variant='contained' color='primary' style={{ width: "130px", marginLeft: "auto", marginRight: "auto" }}>
                Checkout
            </Button>
        </Drawer>
    );
};

export default Cart;
