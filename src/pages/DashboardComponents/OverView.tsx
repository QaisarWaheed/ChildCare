import {
  Card,
  Text,
  Group,
  Stack,
  Title,
  Button,
  ButtonGroup,
} from "@mantine/core";

const OverView = () => {
  return (
    <Group>
      <Card variant="outline" w={"55%"}>
        <Stack gap={30}>
          <Title>Recent Activity</Title>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Emma Jones</Title>
              <Text>Completed development screening</Text>
            </Stack>

            <Text> 2 Hours Ago</Text>
          </Group>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Emma Jones</Title>
              <Text>Updated care plan</Text>
            </Stack>

            <Text> 1 Hours Ago</Text>
          </Group>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Olivia Gray</Title>
              <Text>scheduled follow-up appointment</Text>
            </Stack>

            <Text> Yesterday</Text>
          </Group>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Ava Miller</Title>
              <Text>Reached language development milestone</Text>
            </Stack>

            <Text> 2 Hours Ago</Text>
          </Group>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Wonder Women Miller</Title>
              <Text>language development </Text>
            </Stack>

            <Text> 2 Hours Ago</Text>
          </Group>
        </Stack>
      </Card>

      <Card w={"43%"}>
        <Stack>
          <Stack gap={0}>
            <Title order={2}>Upcoming Appointments</Title>
            <Text>You have 12 appointments scheduled for today.</Text>
          </Stack>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Wonder Women Miller</Title>
              <Text>language development </Text>
            </Stack>

            <Text> 2 Hours Ago</Text>
          </Group>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={6}>Wonder Women Miller</Title>
              <Text>language development </Text>
            </Stack>

            <Text> 2 Hours Ago</Text>
          </Group>
        </Stack>
      </Card>
    </Group>
  );
};

export default OverView;
