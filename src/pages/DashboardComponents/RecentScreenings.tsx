import {
  Card,
  Text,
  Group,
  Stack,
  Title,
  Button,
  Divider,
  Badge,
} from "@mantine/core";
const RecentScreening = () => {
  return (
    <Card variant="outline">
      <Stack gap={30}>
        <Stack gap={0}>
          {" "}
          <Title>Recent Developmental Screening</Title>
          <Text>View recent screening results and recommendations.</Text>
        </Stack>

        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Emma Jones</Title>
            <Text>Age: 2years</Text>
            <Date></Date>
          </Stack>

          <Stack gap={5}>
            <Badge color="green"> On Track</Badge>
            <Button>Details</Button>
          </Stack>
        </Group>
        <Divider />
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Emma Jones</Title>
            <Text>Age: 2years</Text>
            <Date></Date>
          </Stack>

          <Stack gap={5}>
            <Badge color="green"> On Track</Badge>
            <Button>Details</Button>
          </Stack>
        </Group>
        <Divider />
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={6}>Emma Jones</Title>
            <Text>Age: 2years</Text>
            <Date></Date>
          </Stack>

          <Stack gap={5}>
            <Badge color="green"> On Track</Badge>
            <Button>Details</Button>
          </Stack>
        </Group>
        <Divider />
      </Stack>
    </Card>
  );
};

export default RecentScreening;
