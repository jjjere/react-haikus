import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div id="cajaBuscador">
        <input type="text" name="buscador" id="buscador" placeholder="Buscar" />
        <motion.div
          id="iconoBuscador"
          whileHover={{ scale: 2.2 }}
          whileTap={{ scale: 1.9 }}>
        
          <FontAwesomeIcon icon={faSearch} />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
