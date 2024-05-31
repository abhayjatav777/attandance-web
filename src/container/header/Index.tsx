import {
  ActionIcon,
  Box,
  Group,
  Header,
  Menu,
  Paper,
  createStyles,
} from "@mantine/core";
import React from "react";
import IMAGES from "../../image";
import { useSignOut } from "react-auth-kit";
import { IconLogout, IconSettings } from "@tabler/icons-react";
const HeaderField = () => {
  const { classes } = useStyles();
  const signOut = useSignOut();
  return (
    <Paper className={classes.mainPaper}>
      <Header height="8vh" className={classes.header}>
        <Box className={classes.flexContainer}>
          <Box className={classes.containerLeft}>
            <Group>
              <img
                className={classes.logo}
                src={IMAGES.logoWhite}
                alt="img not found"
              />
            </Group>
          </Box>
          <Box className={classes.containerRight}>
            <Menu shadow="xl" offset={3} width={150}>
              <Menu.Target>
                <ActionIcon variant="transparent" mt="0.5rem">
                  <IconSettings size="2rem" color="white" />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown className={classes.profileMenu}>
                <Box className={classes.profileList} onClick={() => signOut()}>
                  <Menu.Item
                    className={classes.profileListItem}
                    icon={<IconLogout size={25} />}
                  >
                    Sign Out
                  </Menu.Item>
                </Box>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </Box>
      </Header>
    </Paper>
  );
};
const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: "#ff008a",
    margin: 0,
  },
  logo: {
    height: "40px",
  },
  flexContainer: {
    display: "flex",
    marginInline: "45px",
    paddingBlock: "12px",
    justifyContent: "space-between",
  },
  containerLeft: {
    marginLeft: "8rem",
  },
  mainPaper: {
    margin: 0,
  },
  containerRight: {},
  profileMenu: {
    color: "green",
    fontSize: "0.1rem",
    borderRadius: "1rem",
  },
  profileList: {
    textDecoration: "none",
  },
  profileListItem: {
    fontSize: `${theme.fontSizes.xs}`,
    "&:hover": {
      transition: " all 0.3s ease-in-out 0s;",
      color: theme.colors.violet[6],
      backgroundColor: "white",
    },
  },
}));
export default HeaderField;
