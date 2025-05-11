import { Card, Group, Stack, Title, Text, Button } from "@mantine/core";
import React from "react";

const PastSessions = () => {
  return (
    <Card>
      <Stack gap={50}>
        <Stack gap={0}>
          <Title order={3}>Past Sessions</Title>
          <Text>You have 5 upcoming telemedicine sessions today.</Text>
        </Stack>
        <Card>
          <Stack>
            <Group justify="space-between">
              <Stack gap={0}>
                <Title order={4}>Emma Jones</Title>
                <Text>Age: 2 years</Text>
              </Stack>
              <Text>10:30 AM</Text>
            </Group>
            <Text>Reason: Follow-up on care plan progress</Text>
            <Group justify="space-between">
              <Text>Completed Today</Text>
              <Group>
                <Button>View Summary</Button>
                <Button variant="outline" color="white">
                  Follow Up
                </Button>
              </Group>
            </Group>
          </Stack>
        </Card>
      </Stack>
    </Card>
  );
};

export default PastSessions;
