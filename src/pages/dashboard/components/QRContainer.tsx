import { Box, Card, Center, Text, Title, createStyles } from "@mantine/core";
import QRCode from "react-qr-code";
import { useGetQrCode } from "../../../hooks/qr-code/query/getQrCode.query";
import { useEffect, useMemo } from "react";
import ErrorPage from "../../error-page/Index";
import ThemeLoader from "../../../component/form/loader/ThemeLoader";

const QRContainer = () => {
  const { classes } = useStyles();
  const { data, isLoading, refetch } = useGetQrCode();
  const qrCode = useMemo(() => {
    if (!isLoading && data && data.status === "success") {
      return data.data;
    } else {
      return undefined;
    }
  }, [data, isLoading]);

  useEffect(() => {
    const interval =   setInterval(() => refetch(), 60000); //one minute
    return() =>{
      clearTimeout(interval);
    }
  })
  if (isLoading) {
    return <ThemeLoader />;
  }
  if (!qrCode) {
    return (
      <ErrorPage
        errorCode={422}
        errorTitle="Can't process request"
        errorMessage="Server didn't respond or data not found"
      />
    );
  }
  return (
    <Box className={classes.mainBox}>
      <Title
        order={3}
        size="h1"
        align="center"
        m="sm"
        className={classes.title}
      >
        Scan QR to mark attendance
      </Title>
      <Center>
        <Card
          key="QrCode"
          shadow="md"
          radius="md"
          className={classes.card}
          padding="2rem"
        >
          <QRCode size={250} value={qrCode.QRString} />
          <Text
            ta="center"
            fw={600}
            className={classes.cardTitle}
            mt="lg"
            size="1.8rem"
          >
            Scan
          </Text>
        </Card>
      </Center>
    </Box>
  );
};
const useStyles = createStyles((theme) => ({
  mainBox: {
    backgroundColor: "#FFE6F3",
    padding: "5rem",
    paddingTop: "2rem",
    height: "92vh",
  },
  title: {
    margin: "15rem",
    color: "#ff008a",
    padding: "2rem",
  },
  grid: {
    marginBlock: "5rem",
    display: "flex",
    justifyContent: "space-around",
  },
  card: {
    margin: "auto",
    justifyContent: "center",
    radius: "0",
  },

  cardTitle: {
    backgroundColor: "#ff008a",
    height: "3rem",
    borderRadius: "0.5rem",
    color: "white",
  },
}));

export default QRContainer;
