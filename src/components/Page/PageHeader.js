import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

import AlgoliaIcon from "!svg-react-loader!../../images/svg-icons/algolia-full.svg?name=AlgoliaIcon";
import HeaderBackground from "./blueOrange3.svg";

const styles = theme => ({
  header: {
    margin: "0 0 0em",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    padding: `calc(${theme.bars.sizes.infoBar}px + 1.5rem) 1.5rem  0 1.5rem`,
    background: {
      //color: '#ff0',
      image:`url(${HeaderBackground})`,
      position: 'center center fixed',
      repeat: 'repeat',
      size: 'cover',
    },
     [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      padding: `calc(2.5rem + ${theme.bars.sizes.infoBar}px) 3.5rem 0`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      padding: "2rem 2.5rem 0"
    }
  },
  title: {
    color: theme.main.colors.title,
    background: "white",
    fontSize: `${theme.main.fonts.title.size}em`,
    letterSpacing: "-0.04em",
    fontWeight: theme.main.fonts.title.weight,
    lineHeight: theme.main.fonts.title.lineHeight,
    margin: "0 0 0.3em",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeM}em`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      fontSize: `${theme.main.fonts.title.sizeL}em`,
      letterSpacing: "-0.05em"
    }
  },
  mark: {
    width: "130px",
    display: "block",
    margin: "0 0 0 10px",
    [`@media (min-width: ${theme.mediaQueryTresholds.M}px)`]: {
      width: "170px"
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      width: "190px"
    }
  }
});

const Header = props => {
  const { classes, title, algolia } = props;

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      {algolia && (
        <a
          className={classes.mark}
          href="https://www.algolia.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <AlgoliaIcon />
        </a>
      )}
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  algolia: PropTypes.bool
};

export default injectSheet(styles)(Header);
