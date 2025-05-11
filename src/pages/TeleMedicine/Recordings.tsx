import { Card, Stack, Title, Text, Group, Button } from "@mantine/core";

const Recordings = () => {
  return (
    <Card>
      <Stack gap={50}>
        <Stack gap={0}>
          <Title order={3}>Recordings</Title>
          <Text>Access recordings of past sessions (with consent).</Text>
        </Stack>
        <Card>
          <Stack>
            <Group justify="space-between">
              <Stack gap={0}>
                <Title order={4}>Emma Jones</Title>
                <Text>Today, 9:00 AM (25 min)</Text>
              </Stack>
              <Button variant="outline" color="white">
                View Recordings
              </Button>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </Card>
  );
};

export default Recordings;
