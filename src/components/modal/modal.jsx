import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./modal.css";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { CheckCircleTwoTone } from "@mui/icons-material";

const Modal = ({ data }) => {
  const form = useRef();
  const [states, setStates] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [clear, setClear] = useState({name: '', num: ''})

  useEffect(() => {
    setProduct(data.find((pr) => pr.id == id));
  }, []);

  let position = "fadeIn";
  let position2 = "fadeOut";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_92ez1se",
        "template_ab0w4rf",
        form.current,
        "89Bf6UZU1dBDLgz-C"
      )
      .then(
        (result) => {
          setStates(true);
          setTimeout(() => {
            setStates(false);
          }, 2000);
          form.current.reset();
        },
        (error) => {
          setStates(false);
        }
      );
  };

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        background: "black",
        height: "100vh",
      }}
    >
      <form ref={form} onSubmit={sendEmail} className="form1">
        <article className={states ? position : position2}>
          <span className="scuesTxt">
          <CheckCircleTwoTone fontSize='large' color='success'/> Success
          </span>
        </article>
        <label className="label1">Full Name</label>
        <input
          type="text"
          name="from_name"
          className="nameTxt"
          placeholder="Enter Your FullName"
        />
        <label className="label2">Number</label>
        <input
          type="text"
          name="user_number"
          className="numberTxt"
          placeholder="Enter your number"
          defaultValue={""}
        />
        <label className="label2">Car Type</label>
        <input
          type="text"
          name="car_type"
          className="numberTxt"
          defaultValue={product.type}
        />
        <label className="label2">
          if you need hourly Enter below: {product.costPerHour} per hour
        </label>
        <input
          type="text"
          name="hourly"
          className="numberTxt"
          defaultValue={''}
        />
        <label className="label2">
          if you need daily Enter below: {product.costPerDay} per day
        </label>
        <input
          type="text"
          name="daily"
          className="numberTxt"
          defaultValue={""}
        />
        <label className="label2">Email</label>
        <input type="email" name="user_email" className="emailTxt" />
        <label className="label3">Message</label>
        <textarea
          name="message"
          className="commentTxt"
          placeholder="Enter your Message"
        />
        <input type="submit" value="Send" className="btn" />
      </form>
    </Stack>
  );
};

export default Modal;
