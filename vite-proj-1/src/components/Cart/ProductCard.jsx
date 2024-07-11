import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MyContext } from './MyProvider';


function ProductCard() {
    const {cart,addToCart} = useContext(MyContext);
    console.log(cart);
    const productName = "Sample Product";
    const productName2 = "Sample Product2222";
  return (
    <>
    <Card sx={{maxWidth:345,marginBottom:2}}>
        <CardContent>
            <Typography variant='h5' component="div">
                {productName}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small' onClick={() => addToCart(productName)}>addToCart</Button>
        </CardActions>
    </Card>

    <Card sx={{maxWidth:345,marginBottom:2}}>
        <CardContent>
            <Typography variant='h5' component="div">
                {productName2}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small' onClick={() => addToCart(productName2)}>addToCart</Button>
        </CardActions>
    </Card>

    </>
    
  )
}

export default ProductCard