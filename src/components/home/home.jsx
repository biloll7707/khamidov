import React, { useEffect, useState } from "react";
import "./home.css";
import firstCar from "./firstcar";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import toyota from '../images/toyota.png'
import vw from '../images/Volkswagen 2.png'
import ford from '../images/Ford.png'
import tesla from '../images/tesla-motors 2 1.png'
import chevy from '../images/Chevrolet 2.png'
import av1 from '../images/Ellipse 2.png'
import av2 from '../images/Ellipse 3.png'
import av3 from '../images/Ellipse 4.png'

const Home = ({ selectedCatHandler, selectedCat }) => {
  const [data] = useState(firstCar);
  const [ind, setInd] = useState(0);

  useEffect(() => {
    const lastind = data.length - 1;
    if (ind < 0) {
      setInd(lastind);
    }
    if (ind > lastind) {
      setInd(0);
    }
  }, [ind, data]);

  // useEffect(() => {
  //   setInterval(() => {
  //     if(document.hasFocus){
  //       setInd(ind + 1);
  //     }
  //   }, 5000);
  // }, [ind]);

  const inputsBtn = (i) => {
    setInd(i);
  };
  return (
    <Stack >
    <div className="headerDiv">
      <div className="cars">
        {data.map((card, indexCars) => {
          const { id, title, lorem, button } = card;

          let position = "nextSlide";
          if (indexCars === ind) {
            position = "activeSlide";
          }
          if (
            indexCars === ind - 1 ||
            (ind === 0 && indexCars === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <section className={position} key={id}>
              <h1 className="h1Cars">{title}</h1>
              <p>{lorem}</p>
              <button
                className="btncars"
                onClick={() => selectedCatHandler( button )}
              >
                {button}
              </button>
            </section>
          );
        })}
      </div>
      <div className="inputSet">
        {data.map((its, indes) => {
          const { id } = its;
          return (
            <input
              type="radio"
              className="radios"
              readOnly="readOnly"
              checked={indes === ind ? true : false}
              key={id}
              onClick={() => inputsBtn(indes)}
            />
          );
        })}
      </div>
    </div>
    <Stack sx={{background:'black'}}>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', width:{xs:'400px',md:'850px'}, margin:'0 auto'}}>
        <img src={vw} alt="" />
        <img src={chevy} alt="" />
        <img src={ford} alt="" />
        <img src={tesla} alt="" />
        <img src={toyota} alt="" />
      </Box>
      <Box sx={{width:{xs:'450px',md:'850px'}, margin:'50px auto', display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography sx={{color:'#DC143C'}}>
        Testimonials
        </Typography>
        <Typography sx={{color:'#FFFFFF', fontSize:'40px', fontWeight:'700', }}>
        What Clients Say
        </Typography>
        <div className="commentMainDiv">
          <div className="commentCard">
            <div className="textBuble">
              <h1>“</h1>
              <p>
              I know I can count on your service if I
              need my project done fast and with
              the best possible result. I am a
              regular customer and hope to
              continue our work!
              
              </p>
            </div>
            <Avatar sx={{mt:'50px', width:'100px', height:'100px'}}><img src={av1} alt="img" /></Avatar>
            <Typography sx={{color:'#fff', lineHeight:'1.5', mt:'10px'}}>Lewis Jane</Typography>
            <Typography sx={{color:'#fff', lineHeight:'1.5'}}>Photographer</Typography>
          </div>
          <div className="commentCard">
            <div className="textBuble">
              <h1>“</h1>
              <p>
              I know I can count on your service if I
              need my project done fast and with
              the best possible result. I am a
              regular customer and hope to
              continue our work!
              </p>
            </div>
            <Avatar sx={{mt:'50px', width:'100px', height:'100px'}}><img src={av2} alt="img" /></Avatar>
            <Typography sx={{color:'#fff', lineHeight:'1.5', mt:'10px'}}>Ben Bennaki</Typography>
            <Typography sx={{color:'#fff', lineHeight:'1.5'}}>Sector CEO</Typography>
          </div>
          <div className="commentCard">
            <div className="textBuble">
              <h1>“</h1>
              <p>
              I know I can count on your service if I
              need my project done fast and with
              the best possible result. I am a
              regular customer and hope to
              continue our work!
              
              </p>
            </div>
            <Avatar sx={{mt:'50px', width:'100px', height:'100px'}}><img src={av3} alt="img" /></Avatar>
            <Typography sx={{color:'#fff', lineHeight:'1.5', mt:'10px'}}>Sandra Kay</Typography>
            <Typography sx={{color:'#fff', lineHeight:'1.5'}}>Makeup Artist</Typography>
          </div>
        </div>
      </Box>
    </Stack>
    <div className="secondHome">
       <div className="secondHomebond">
       <h1>Make your trip an unforgettable moment together.</h1>
        <button onClick={() => selectedCatHandler('Contact')}>Get in Touch Now</button>
       </div>
    </div>
    </Stack>
  );
};

export default Home;
