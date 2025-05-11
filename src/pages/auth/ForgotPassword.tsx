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

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
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
        style={{
          height: "100vh",
        }}
        align="center"
        justify="center"
        gap={"2"}
      >
        <Card>
          <Stack>
            <Stack justify="center" align="center">
              <Title order={3}>Reset Password</Title>
              <Text>Enter your email to Reset your Password</Text>
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
            <Stack>
              <Group>
                <Input
                  type="number"
                  variant="outline"
                  placeholder="Otp"
                  style={{
                    border: "1px solid #141B2B",
                    borderRadius: "8px",
                  }}
                ></Input>
                <Button variant="outline">Send Otp</Button>
              </Group>
            </Stack>
            <Stack gap={0}>
              <Text>Password</Text>

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
                placeholder="Password"
                type="password"
                variant="outline"
                leftSection={<IconEye />}
              />
            </Stack>

            <Button
              onClick={() => {
                if (!email) {
                  return alert(" Where Should I send OTP? Enter Email");
                }
                if (!password || !confirmPassword)
                  return alert("new Password cannot be empty");
                if (password !== confirmPassword)
                  return alert("Password and Confirm Password does not match");
                navigate("/dashboard");
              }}
            >
              Change Password
            </Button>
            <Stack align="center"></Stack>
          </Stack>
        </Card>
      </Stack>
    </Stack>
  );
};

export default ForgotPassword;
