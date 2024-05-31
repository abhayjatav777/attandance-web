import { Loader, createStyles } from "@mantine/core";
const ThemeLoader = () => {
  const { classes } = useStyles();
  return (
    <Loader variant="oval" size="lg" className={classes.loader} color="pink" />
  );
};
const useStyles = createStyles((theme) => ({
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
}));

export default ThemeLoader;
