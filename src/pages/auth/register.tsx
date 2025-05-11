import {
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Title,
  Text,
  Input,
  Anchor,
  Button,
} from "@mantine/core";

import IconUser from "../../assets/icons/IconUser";
import IconEye from "../../assets/icons/IconEye";
import { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();

  return (
    <Stack>
      <Stack>
        <Group ml={"xl"} p={"xs"} align="center">
          <Title title="Client Portal" />
        </Group>
        <Divider />
      </Stack>
      <Stack
        align="center"
        justify="center"
        style={{
          height: "100vh",
        }}
        gap={"2"}
      >
        <Card>
          <Stack>
            <Stack align="center">
              <Title order={3}>Sign Up</Title>
              <Text>Enter your email and password to Create an Account</Text>
            </Stack>
            <Stack gap={0}>
              <Text>Email</Text>
              <Input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                style={{
                  border: "1px solid #141B2B",
                  borderRadius: "8px",
                }}
                placeholder="Email"
                type="text"
                variant="outline"
                leftSection={<IconUser />}
              />
            </Stack>
            <Stack gap={0}>
              <Group justify="space-between">
                <Text>Password</Text>
              </Group>

              <Input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                style={{
                  border: "1px solid #141B2B",
                  borderRadius: "8px",
                }}
                placeholder="Password"
                type="password"
                variant="outline"
                leftSection={<IconEye />}
              />
            </Stack>
            <Stack gap={0}>
              <Text>Confirm Password</Text>

              <Input
                onChange={(event) => {
                  setconfirmPassword(event.target.value);
                }}
                style={{
                  border: "1px solid #141B2B",
                  borderRadius: "8px",
                }}
                placeholder="Confirm Password"
                type="password"
                variant="outline"
                leftSection={<IconEye />}
              />
            </Stack>

            <Button
              onClick={() => {
                if (!email || !password || !confirmPassword) {
                  return alert(" Email or password are mandatory");
                }

                if (password !== confirmPassword)
                  return alert("Password and Confirm password does not match");
                navigate("/dashboard");
              }}
            >
              Login
            </Button>
            <Stack align="center">
              <Text>
                Already have an Account? <Anchor href="/login">Sign In</Anchor>
              </Text>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Register;
