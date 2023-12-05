import React from "react";
import { motion } from "framer-motion";
import GroupYoga from "./svgs/GroupYoga";

const About = () => {
  return (
    <div className="about d-flex">
      <motion.div
        style={{ flex: 1, width: '5%' }}
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1 }}
      >
        <GroupYoga />
      </motion.div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus,
          nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat
          odio, sollicitudin vel erat vel, interdum mattis neque.
        </p>
      </div>
    </div>
  );
};

export default About;
