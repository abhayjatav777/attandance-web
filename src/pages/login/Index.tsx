import {
  Checkbox,
  Anchor,
  Paper,
  Group,
  Button,
  createStyles,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

import { useCallback, useEffect } from "react";
import { useForm, yupResolver } from "@mantine/form";
import { initialValue } from "../../form/initial-value";
import InputField from "../../component/form/input-field/InputField";

import { TLoginIniValues } from "../../form/initial-value/login.values";
import { validations } from "../../form/validation";

import { notifications } from "@mantine/notifications";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useLoginMutation } from "../../hooks/login/mutation/useLogin.mutation";
import IMAGES from "../../image";
import PasswordField from "../../component/form/password-field/PasswordField";

const useStyles = createStyles((theme) => ({
  box: {
    width: "25rem",
    margin: "auto",
    marginTop: theme.spacing.xl,
  },
  title: {
    textAlign: "center",
    margin: "0",
    fontFamily: "sans-serif",
  },
  text: {
    fontSize: theme.fontSizes.sm,
    textAlign: "center",
    marginTop: theme.spacing.sm,
  },
  logo: {
    margin: "auto",
    marginTop: "4rem",
    width: 75,
  },
  main: {
    backgroundColor: "#ffffff",
  },
  btn: {
    background: "#00882E",
    height: "2.5rem",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { isLoading, mutateAsync } = useLoginMutation();
  const signIn = useSignIn();
  const { getInputProps, onSubmit, reset } = useForm({
    initialValues: initialValue.loginIniValues,
    validate: yupResolver(validations.login),
    validateInputOnBlur: true,
    validateInputOnChange: true,
  });

  const handleLogin = useCallback(
    async (values: TLoginIniValues) => {
      const res = await mutateAsync(values);

      if (
        res.status === "success" &&
        signIn({
          token: res.data.token,
          expiresIn: res.data.expiresIn,
          tokenType: "Bearer",
          authState: res.data.authState,
        })
      ) {
        localStorage.setItem("token", res.data.token);
        reset();
        navigate("/");
      } else {
        notifications.show({
          color: "red",
          message: res.message,
        });
      }
    },
    [mutateAsync, navigate, signIn, reset]
  );

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box className={classes.main}>
      <Box>
        <Group>
          <img className={classes.logo} src={IMAGES.logo} alt="" />
        </Group>
      </Box>
      <Box className={classes.box}>
        <Paper withBorder shadow="xl" p={20} mt={30} radius="lg">
          <h1 className={classes.title}> Login</h1>
          <p className={classes.text}>Access to our dashboard</p>

          <form onSubmit={onSubmit(handleLogin)}>
            <InputField
              label="Email"
              name="email"
              getInputProps={getInputProps}
            />
            <PasswordField
              label="Password"
              name="password"
              getInputProps={getInputProps}
            />

            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor
                component="button"
                size="sm"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </Anchor>
            </Group>

            <Button
              disabled={isLoading}
              loading={isLoading}
              type="submit"
              variant="gradient"
              fullWidth
              mt="xl"
              className={classes.btn}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
