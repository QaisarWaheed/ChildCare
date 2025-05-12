import { Card, Group, Stack, Title, Text, Button, Image } from "@mantine/core";

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

const PastSessionsPage = () => {
  return (
    <Stack>
      <Group gap={100}>
        <Stack justify="space-between">
          <Group justify="space-between">
            <Stack gap={0}>
              <Title>TeleMedicine Platform</Title>
              <Text>
                Secure remote consultations between pediatricians and parents.
              </Text>
            </Stack>
            <Button> Start New Session</Button>
          </Group>
          <Group>
            <Card variant="outline">
              <Stack>
                <Text>Today's Sessions</Text>
                <Text>8</Text>
                <Text> 3 completed, 5 upcoming</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Average Duration</Text>
                <Text>20 min</Text>
                <Text>+2 min from last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Weekly Sessions</Text>
                <Text>32</Text>
                <Text> +2 from last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Patient Satisfaction</Text>
                <Text>4.6/5</Text>
                <Text> Based on 100 reviews</Text>
              </Stack>
            </Card>
          </Group>
        </Stack>
      </Group>
      <Button.Group>
        <Button variant="default">Past Sessions</Button>
      </Button.Group>
      <PastSessions />
      <Card>
        <Stack>
          <Stack gap={25}>
            <Stack gap={0}>
              {" "}
              <Title order={3}> Active Session</Title>
              <Text>Currently in Session with Emma Johnson (2 years)</Text>
            </Stack>

            <Image
              w={1000}
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            />
            <Group justify="center">
              {" "}
              <Button variant="outline" color="white">
                Camera
              </Button>
              <Button variant="outline" color="white">
                {" "}
                Mic
              </Button>
              <Button variant="outline" color="white">
                Disconnect
              </Button>
            </Group>
            <Group justify="space-between">
              <Stack>
                <Title order={3}> Session Notes</Title>
                <Text>Notes are being saved automatically</Text>
              </Stack>
              <Button variant="outline" color="white">
                Open Care Plan
              </Button>
            </Group>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default PastSessionsPage;
