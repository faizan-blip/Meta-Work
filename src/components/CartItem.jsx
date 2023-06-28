import { FcDeleteDatabase } from "react-icons/fc";
import { useContext } from "react";
import { CartContext } from "../redux/Context/CartContext";
import { toast } from "react-hot-toast";
import { Box, IconButton, Paper, Typography } from "@mui/material";

const CartItem = ({ item, itemIndex }) => {
  const { removeCartItem } = useContext(CartContext);

  const removeFromCart = () => {
    removeCartItem(item.id);
    toast.success("Item Removed");
  };

  return (
    <>
    <Box sx={{display:"flex" , flexDirection:"row !important"}}>
    <Paper sx={{width:{sm:"25em" , xs:"310px"},padding:"0.5em 0.5em", minWidth:"250px" , minHeight:"25em" , height:"auto" , background:"#121212" , display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , flexDirection:"column" , margin:"1em 1em"}}>
           <img src={item.image} alt="" width={300} />
           <IconButton onClick={removeFromCart} sx={{alignSelf:"flex-end"}}>
            <FcDeleteDatabase/>
           </IconButton>
           <Typography sx={{color:"#fff" , fontWeight:"700" , textAlign:"center"}}>{item.title}</Typography>
               
    </Paper>
   
    </Box>
           </>
  );
};

export default CartItem;
