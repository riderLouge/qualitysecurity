import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;

  background: linear-gradient(135deg, #98daeb 0%, #a5dae8 50%, #a1c5cf 100%);
  /* Adjusted the gradient stops to maintain yellow/gold shades */

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634, filter: brightness(1);
  }
`;

const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [userMessage, setUserMessage] = React.useState("");
  const form = useRef(null); 
  const [messageType, setMessageType] = React.useState(""); 


  const Message = styled.div`
  color: ${(messageType === "success" ? "green" : "red")};
  font-size: 14px;
  margin-top: 5px;
  `;

  const clearMessage = () => {
    setTimeout(() => {
      setMessage("");
    }, 5000); // Clear message after 5 seconds
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name.trim()) {
      setMessage("Please enter your name.");
      setMessageType("error")
      clearMessage();
      return;
    }

    if (!/^\d{10}$/.test(contact.trim())) {
      setMessage("Please enter a valid 10-digit contact number.");
      setMessageType("error")
      clearMessage();
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      clearMessage();
      return;
    }

    if (!userMessage.trim()) {
      setMessage("Please enter your message.");
      setMessageType("error")
      clearMessage();
      return;
    }

    if (form.current) {
      // If all validations pass, proceed to send the email
      emailjs
        .sendForm("service_vgakv2p", "template_c44iy6r", form.current, "3IdgepZSbXbvgOpvh")
        .then(() => {
          setMessage("Email sent successfully!");
          setName("");
          setEmail("");
          setContact("");
          setUserMessage("");
          clearMessage();
          setMessageType("success")
        })
        .catch((error) => {
          setMessage("Failed to send email. Please try again later.");
          setMessageType("error")
          clearMessage();
        });
    } else {
      setMessage("Form not initialized properly. Please try again.");
      setMessageType("error")
      clearMessage();
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Get in Touch with us!</ContactTitle>
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <ContactInput
              placeholder="Your Contact Number"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <ContactInputMessage
              placeholder="Message"
              rows={4}
              name="message"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            {message && <Message>{message}</Message>}
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
