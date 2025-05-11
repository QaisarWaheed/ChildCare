import { Group, Stack, Title, Text, Divider, Anchor } from "@mantine/core";

import IconArchive from "../assets/icons/IconArchive";
import IconPaperClip from "../assets/icons/IconPaperClip";
import IconUser from "../assets/icons/IconUser";
import IconSettings from "../assets/icons/IconSettings";

const SideBar = () => {
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
            <Anchor c="white">Dashboard</Anchor>
          </Text>
        </Group>
      </Stack>

      <Stack ml={10} mt={10}>
        <Text> Child Development</Text>
        <Group align="center">
          <IconPaperClip />
          <Text>
            <Anchor c="white">Development Screening</Anchor>
          </Text>
        </Group>

        <Group align="center">
          <IconUser />
          <Text>
            <Anchor c="white">Care Plans</Anchor>
          </Text>
        </Group>

        <Group align="center">
          <IconUser />
          <Text>
            <Anchor c="white">Development tracking</Anchor>
          </Text>
        </Group>
      </Stack>

      <Stack ml={10} mt={10}>
        <Text> Administrative</Text>
        <Group align="center">
          <IconPaperClip />
          <Text>
            <Anchor c="white">User Management</Anchor>
          </Text>
        </Group>

        <Group align="center">
          <IconUser />
          <Text>
            <Anchor c="white">Scheduling</Anchor>
          </Text>
        </Group>

        <Group align="center">
          <IconUser />
          <Text>
            <Anchor c="white">Billing and insurance</Anchor>
          </Text>
        </Group>

        <Group align="center">
          <IconUser />
          <Text>
            <Anchor c="white">Reports and Analytics</Anchor>
          </Text>
        </Group>
      </Stack>
      <Stack ml={10} mt={10}>
        <Text> Technical</Text>
        <Group align="center">
          <IconPaperClip /> Tele medicine
          <Text>
            <Anchor c="white"></Anchor>
          </Text>
        </Group>

        <Group>
          <IconSettings />
          <Text>
            <Anchor c="white">Settings</Anchor>
          </Text>
        </Group>
      </Stack>
    </Stack>
  );
};

export default SideBar;
