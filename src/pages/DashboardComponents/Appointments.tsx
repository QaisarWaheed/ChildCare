import {
  Card,
  Text,
  Group,
  Stack,
  Title,
  Button,
  ButtonGroup,
} from "@mantine/core";
const Appointments = () => {
  return (
    <Card variant="outline">
      <Stack gap={30}>
        <Stack gap={0}>
          {" "}
          <Title>All Appointments</Title>
          <Text>View and manage all scheduled appointments.</Text>
        </Stack>

        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Emma Jones</Title>
            <Text>Completed development screening</Text>
          </Stack>

          <Group>
            <Text> 9:00PM</Text>
            <Button>Details</Button>
          </Group>
        </Group>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Emma Jones</Title>
            <Text>Updated care plan</Text>
          </Stack>
          <Group>
            <Text> 9:00PM</Text>
            <Button>Details</Button>
          </Group>
        </Group>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Olivia Gray</Title>
            <Text>scheduled follow-up appointment</Text>
          </Stack>

          <Group>
            <Text> 9:00PM</Text>
            <Button>Details</Button>
          </Group>
        </Group>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Ava Miller</Title>
            <Text>Reached language development milestone</Text>
          </Stack>

          <Group>
            <Text> 9:00PM</Text>
            <Button>Details</Button>
          </Group>
        </Group>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Wonder Women Miller</Title>
            <Text>language development </Text>
          </Stack>

          <Group>
            <Text> 9:00PM</Text>
            <Button>Details</Button>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default Appointments;
