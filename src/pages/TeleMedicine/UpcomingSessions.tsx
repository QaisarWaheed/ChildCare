import { Card, Group, Stack, Title, Text, Button } from "@mantine/core";

const UpcomingSessions = () => {
  return (
    <Card>
      <Stack>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={4}>Emma Jones</Title>
            <Text>Age: 2 years</Text>
          </Stack>
          <Text>10:30 AM</Text>
        </Group>
        <Text>Reason: Follow-up on developmental screening</Text>
        <Group justify="space-between">
          <Text>Starts in 45 minutes</Text>
          <Group>
            <Button>Join Session</Button>
            <Button variant="outline" color="white">
              Reschedule
            </Button>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default UpcomingSessions;
