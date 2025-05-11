import {
  Card,
  Text,
  Group,
  Stack,
  Title,
  Button,
  Divider,
  Badge,
  ProgressSection,
  Progress,
  Input,
  Menu,
  SimpleGrid,
} from "@mantine/core";

const PatientDetailsCard = () => {
  return (
    <Card>
      <Stack>
        <Group justify="space-between">
          <Stack gap={0}>
            <Title order={4}>Emma Jones</Title>
            <Text>2 Years</Text>
          </Stack>
          <Badge color="blue"> Active</Badge>
        </Group>
        <Stack>
          <Group justify="space-between">
            <Text> Cognitive</Text>
            <Text>90%</Text>
          </Group>
          <Progress value={50}></Progress>
        </Stack>
        <Stack>
          <Group justify="space-between">
            <Text> Motor Skills</Text>
            <Text>90%</Text>
          </Group>
          <Progress value={50}></Progress>
        </Stack>
        <Stack>
          <Group justify="space-between">
            <Text> Language</Text>
            <Text>90%</Text>
          </Group>
          <Progress value={50}></Progress>
        </Stack>
        <Stack>
          <Group justify="space-between">
            <Text> Social-Emotional</Text>
            <Text>90%</Text>
          </Group>
          <Progress value={50}></Progress>
        </Stack>
        <Group>
          <Button variant="outline">View Details</Button>
          <Button>Update Progress</Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default PatientDetailsCard;
