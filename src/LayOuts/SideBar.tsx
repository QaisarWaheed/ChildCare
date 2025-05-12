import {
  Group,
  Stack,
  Title,
  Text,
  Divider,
  Anchor,
  Button,
} from "@mantine/core";

import IconArchive from "../assets/icons/IconArchive";
import IconPaperClip from "../assets/icons/IconPaperClip";
import IconUser from "../assets/icons/IconUser";
import { Navigate, useNavigate } from "react-router";

const SideBar = () => {
  const Navigate = useNavigate();
  return (
    <Stack
      w={"fit-content"}
      bg={"gray"}
      h={"100vh"}
      style={{
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <Stack justify="space-between">
        <Stack m={"xs"} gap={0}>
          <Group>
            <IconArchive />
            <Title order={4}>Pedi Care</Title>
          </Group>
          <Text> Child Development platform</Text>
        </Stack>
        <Divider mr={"10"} ml={"10"}></Divider>
        <Stack ml={10}>
          <Text>OverView</Text>

          <Group align="center">
            <IconPaperClip />
            <Text>
              <Anchor c="white" href="/dashboard">
                Dashboard
              </Anchor>
            </Text>
          </Group>
        </Stack>
        <Stack ml={10} mt={10}>
          <Text> Child Development</Text>
          <Group align="center">
            <IconPaperClip />
            <Text>
              <Anchor c="white" href="/Developmental-Screening">
                Development Screening
              </Anchor>
            </Text>
          </Group>

          <Group align="center">
            <IconUser />
            <Text>
              <Anchor c="white" href="/Personalized-Care">
                Care Plans
              </Anchor>
            </Text>
          </Group>

          <Group align="center">
            <IconUser />
            <Text>
              <Anchor c="white" href="/DevelopmentTracking">
                Development tracking
              </Anchor>
            </Text>
          </Group>
        </Stack>
        <Stack ml={10} mt={10}>
          <Text> History</Text>
          <Group align="center">
            <IconPaperClip />
            <Text>
              <Anchor c="white" href="/past-sessions">
                Past Sessions
              </Anchor>
            </Text>
          </Group>

          <Group align="center">
            <IconUser />
            <Text>
              <Anchor c="white" href="/Recordings">
                Recordings
              </Anchor>
            </Text>
          </Group>
        </Stack>
        <Stack ml={10} mt={10}>
          <Text> Account Management</Text>

          <Group align="center">
            <IconUser />
            <Text>
              <Anchor c="white" href="/User-Profile">
                User Profile
              </Anchor>
            </Text>
          </Group>
        </Stack>
        <Stack ml={10} mt={10}>
          <Text> Technical</Text>
          <Group align="center">
            <IconPaperClip />
            <Text>
              <Anchor c="white" href="/telemedicine">
                Tele medicine
              </Anchor>
            </Text>
          </Group>
        </Stack>
      </Stack>
      <Divider mr={"xs"} ml={"xs"} />
      <Stack>
        <Button
          onClick={(e) => {
            Navigate("/register");
          }}
        >
          {" "}
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default SideBar;
