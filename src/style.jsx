import { makeStyles } from "@material-ui/core/styles";
import sunny from "./images/sunny.jpg";
import snow from "./images/snow.webp";
import scattered_clouds from "./images/scattered_clouds.jpg";
import cold from "./images/cold.webp";
import dust from "./images/dust.jpg";
import haze from "./images/haze.jpg";
import mist from "./images/mist.jpeg";
import rainy from "./images/rainy.jpg";
import overcast_clouds from "./images/overcast_cloud.jpg";
import smoke from "./images/smoke.jpg";
import clear_sky from "./images/clear_sky.jpg";
import few_clouds from "./images/few_clouds.jpg";

const styles = makeStyles((theme) => ({
    sunny: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${sunny})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    few_clouds: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${few_clouds})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    snow: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${snow})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    scattered_clouds: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${scattered_clouds})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    overcast_clouds: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${overcast_clouds})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    cold: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${cold})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    clear_sky: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${clear_sky})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    dust: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${dust})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    haze: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${haze})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    mist: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${mist})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    rainy: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${rainy})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },
    smoke: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0, 0.75)),url(${smoke})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    },

    textField: {
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        height: "20vh",

        color: "white",
    },
    inputField: {
        background: "rgba(255,255,255,0.4)",
        border: "none",
        display: "block",
        outline: "none",
        width: "500px",
        [theme.breakpoints.down('sm')]: {
            width:'250px'
          },
        height: "60px",
        [theme.breakpoints.down('sm')]: {
            height:'50px'
          },
        margin: "3% auto",
        padding: "10px",
        color: "#333",
        boxShadow: "0 2px 10px 1px rgba(0,0,0,0.5)",
    },
    weatherinfo: {
        height: "74vh",
        display: "flex",
        justifyContent: "center",
    },
    innerdiv: {
        display: "flex",
        flexDirection: "column",
        width: "500px",
    },
    cityandtime: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "30px",
    },
    city: {
        marginTop: "5%",
        padding: "0",
        fontSize: "4vw",
        [theme.breakpoints.down('sm')]: {
           fontSize:'10vw'
          },
        color: "white",
        fontWeight: "500",
        textShadow: "2px 2px rgba(50,50,70,0.5)",
    },
    time: {
        margin: "0",
        padding: "0",
        fontSize: "2vw",
        [theme.breakpoints.down('sm')]: {
            fontSize:'6vw'
          },
        color: "white",
        fontWeight: "400",
        fontStyle: "italic",
        textShadow: "2px 2px rgba(50,50,70,0.5)",
    },
    tempBox: {
        alignItems: "center",
        margin: "10px auto",
    },
    temps: {
        display: "inline-block",
        backgroundColor: "rgba(255,255,255,0.2)",
        color: "white",
        fontSize: "5vw",
        [theme.breakpoints.down('sm')]: {
            fontSize:'10vw'
          },
        padding: "15px 25px",
        borderRadius: "16px",
        textShadow: "2px 2px rgba(50,50,70,0.5)",
        fontWeight: "900",
        boxShadow: "3px 6px rgba(0,0,0,0.2)",
    },
    description: {
        fontSize: "3vw",
        [theme.breakpoints.down('sm')]: {
            fontSize:'10vw'
          },
        fontWeight: "600",
        textShadow: "2px 2px rgba(50,50,70,0.5)",
        color: "white",
        textAlign: "center",
    },
}));

export default styles;
