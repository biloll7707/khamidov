import { Box, Stack, Typography } from "@mui/material";
import './orderride.css'
import { dataPrice } from "./dataPrice";
import { Link } from "react-router-dom";
const OrderRide = () => {
  return <Stack    sx={{
    width: "100vw",
    maxWidth: { xs: "450px", md: "1280px", margin: "0 auto" },
  }}>
    <Box  sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "black",
        }}>
      <Typography  sx={{
            fontSize: { xs: "25px", md: "30px" },
            fontWeight: "700",
            mt: "40px",
            mb: "30px",
            color: "#fff",
            borderBottom: "1px solid #DC143C",
          }}>Our Ride Pricing</Typography>
      <Typography   sx={{
            fontSize: { xs: "14px", md: "18px" },
            fontWeight: "400",
            maxWidth: { xs: "420px", md: "680px", color: "#fff" },
            mb: "40px",
          }}>Our department is here to ensure personalized guidance. Our smart team takes care of
everything. The entire team has been great to work with from start to finish.</Typography>
          <Box sx={{
            display: "flex",
            // flexDirection: { xs: "column", md: "row" },
            width:'100vw',
            maxWidth: {
              xs: "420px",
              md: "1280px",
            },
            justifyContent: "space-between",
            overflow:'scroll',
            padding:{xs:'0 10px',md:'0 50px'}
          }}>
            {dataPrice.map(item => {
              const {id, img, type, seats, costPerHour, costPerDay} = item
              return(
            <Box sx={{width:'250px', background:'#fff', padding:'20px',margin:'0 20px', mb:'20px'}} key={id}>
              <Typography>{type}</Typography>
              <img src={img} alt="car1" style={{height:'200px', width:'230px'}}/>
              <Typography sx={{margin:'20px 0'}}>Car details</Typography>
              <Typography sx={{color:''}}>Seats:</Typography>
              <Typography sx={{color:'#DC143C', mb:'30px'}}>{seats}</Typography>

              <Typography sx={{color:''}}>Color variation:</Typography>
              <Typography sx={{color:'#DC143C', mb:'30px'}}>White & Black</Typography>

              <Typography sx={{color:''}}>Cost Per Houry:</Typography>
              <Typography sx={{color:'#DC143C', mb:'30px'}}>{costPerHour}</Typography>

              <Typography sx={{color:''}}>Cost Per Day:</Typography>
              <Typography sx={{color:'#DC143C', mb:'30px'}}>{costPerDay}</Typography>

              <button style={{padding:'10px 50px', background:'#DC143C', color:'#fff', border:'none', borderRadius:'5px', cursor:'pointer' }}>
              <Link className='link' to={`/modal/${id}`}>
              Order Ride
              </Link>  
                </button>
            </Box>

              )
            })}
          </Box>
    </Box>
  </Stack>;
};

export default OrderRide;
