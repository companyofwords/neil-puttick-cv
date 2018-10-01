import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Article from "../Main/Article";
import Content from "../Main/Content";
import Form from "../ContactForm";
import config from "../../../content/meta/config";

const styles = theme => ({});

const Contact = () => {
  return (
    
      <Article>
        <Content>
          Feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        </Content>
        <Form netlify/>
      </Article>
    
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
