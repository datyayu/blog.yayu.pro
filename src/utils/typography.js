import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";
import TwinPeaks from "typography-theme-twin-peaks";

TwinPeaks.headerColor = "#5abfb7";
TwinPeaks.bodyColor = "#3c3c3c";
TwinPeaks.overrideStyles = ({ rythym }, options) => ({
  a: {
    color: "#5abfb7",
    textDecoration: "none",
    backgroundImage: "none",
    transition: "background-image 300ms ease-in-out"
  },
  "a:hover": {
    color: "#5abfb7",
    textDecoration: "none",
    backgroundImage:
      "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #5abfb7 1px, #5abfb7 2px, rgba(0, 0, 0, 0) 4px)"
  }
});

const typography = new Typography(TwinPeaks);

// Hot reload typography in development.
if (process.env.NODE_ENV !== "production") {
  typography.injectStyles();
}

export default typography;
