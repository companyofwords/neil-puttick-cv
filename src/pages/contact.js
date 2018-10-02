import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Obfuscate from "react-obfuscate";

import Main from "../components/Main";
import Article from "../components/Main/Article";
import PageHeader from "../components/Page/PageHeader";
import Content from "../components/Main/Content";
import Form from "../components/ContactForm";
import config from "../../content/meta/config";

const styles = theme => ({});

const Contact = () => {
  return (
    <Main>
      <Article>
        <PageHeader title="Contact" />
        <Content>
        I am looking for web development opportunities, particularly those with a social or creative side. If you would like me to be part of your team, please feel free to contact me by email: <Obfuscate email={config.contactEmail} /> or use the
          form below.
        </Content>
        <Form netlify/>
      </Article>
    </Main>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(Contact);
