import React from "react";
import { motion } from "framer-motion";
import burger from "../../assets/burger2.png";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css"; // Import the CSS for reactjs-popup

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
        className="contact-form" // Add a CSS class for styling
      >
        <h2>Nous contacter</h2>
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Mail" />
        <textarea placeholder="Message..." cols="30" rows="10"></textarea>
        <Popup
          trigger={<button type="button">Envoyer</button>}
          position="center" // Set the position of the popup
        >
          {/* Use a div for better styling control */}
          <div className="popup-content">
            Merci de nous avoir contactés ! Nous vous répondrons dans les plus
            brefs délais.
          </div>
        </Popup>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="burger-image" // Add a CSS class for styling
        >
          <img src={burger} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
