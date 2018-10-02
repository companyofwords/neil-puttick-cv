
import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

//In parent put this : import TextRotate from "../TextRotate/"; & call this <TextRotate items={[`blazing fast`, `modern`, `beautiful`, `secure`]} colour={`#000000`}/>

const styles = theme => ({
    /*Vertical Sliding*/
textrotate: {
    color: "#000000",
    display: "inline",
    textIndent: "8px",
    "& span": {
        animation: "topToBottom 10s linear infinite 0s",
        opacity: 0,
        color: "#000000",
        position: "absolute"
      },
  "& span:nth-child(2)": {
    animationDelay: "2.5s"
  },
    "& span:nth-child(3)": {
    animationDelay: "5s"
  },
   "& span:nth-child(4)": {
    animationDelay: "7.5s"
  }//,
//  "& @-webkit-keyframes topToBottom": {
//	"0%": { opacity: 0 },
//	"6%": { opacity: 0, webkitTransform: "translateY(-30px)" }
//	"10%": { opacity: 1, webkitTransform: "translateY(0px)" }
//	"25%": { opacity: 1, webkitTransform: "translateY(0px)" }
//	"29%": { opacity: 0, webkitTransform: "translateY(30px)" }
//	"80%": { opacity: 0 }
//	"100%": { opacity: 0 }
}
});





    const TextRotate = props => {
        const { items, classes, color} = props;
      
        return (
          <div className={classes.textrotate}>
            {items.map(item => (
              <span key={item} color={color}>
                {item}
              </span>
            ))}
          </div>
        );
      };


TextRotate.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default injectSheet(styles)(TextRotate);