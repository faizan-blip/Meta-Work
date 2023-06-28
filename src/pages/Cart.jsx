import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../redux/Context/CartContext";
import CartItem from "../components/CartItem";
import { Paper, Typography, Button } from "@mui/material";
import carting from '../components/Images/pngwing.com.png'
const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div style={{ display: "flex",minHeight:"100vh",height:"100%" , padding:"0em 2em" , flexDirection:"column" , alignItems:"center" , justifyContent:"center" }}>
        {cart.length > 0 ? (
          <>
          <div style={{padding:"2em 1em" , display:"flex" ,width:"100%" , flexWrap:"wrap" , alignSelf:"center" , justifyContent:"center"}}>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
             </div>
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"start" , color:"#fff" , gap:"0.5em", marginLeft:"1.2em" , background:"#121212" , padding:"1em 1em" , borderRadius:"20px 20px 20px 20px"}}>
              <p>
                <Typography  sx={{ color:"#fff" , fontWeight:"700"}}>Total Items: {cart.length}</Typography>
              </p>
              <Typography variant="body1"  sx={{ color:"#fff" , fontWeight:"700"}}>Total Amount: ${totalAmount}</Typography>
              <Button variant="contained" sx={{background:"#fff !important" , color:"#121212" , fontWeight:"700"}}>CheckOut Now</Button>
            </div>
          </>
        ) : (
          <Paper elevation={3} sx={{background:"#121212" , width:{sm:"22em" , xs:"auto"} , padding:"1.5em 1.5em"}}>
          <div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , gap:"1em"}}>
            <img src={carting} alt="" width={300} />
            <Typography sx={{color:"#fff" , fontWeight:"700" , fontSize:"19px"}}>Cart Empty</Typography>
            <Typography  sx={{color:"#fff" , fontWeight:"500" , fontSize:"16px" , width:"17em" , textAlign:"center"}}>Look like you haven't added anything in your cart!!!</Typography>
            <Link to={"/"}>
              <Button variant="contained" sx={{background:"#fff !important" , color:"#121212" , fontWeight:"700"}}>Shop Now</Button>
            </Link>
          </div>
          </Paper>
        )}
    </div>
  );
};

export default Cart;
