import { makeStyles } from "@mui/styles";
export const useStylesWhat = makeStyles({
  root: {
    position: "relative",
    borderRadius: 20,
    zIndex: 199,
    border: "1px solid yellow",
    padding: 50,
    backgroundColor: "red",
    marginTop: 50,
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: -300,
      margin: -2,
      borderRadius: "inherit",
      filter: "blur(20px)",
      backgroundImage:
        "linear-gradient(90deg, rgba(138, 121, 255, 0.8) 0%, rgba(206, 77, 164, 0.8) 100%)",
    },
  },
});
