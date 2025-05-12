import {
  Card,
  Stack,
  Title,
  Text,
  Group,
  Badge,
  Progress,
  Button,
} from "@mantine/core";

interface byMileStone {
  text: string;
}

const ByMileStone = (props: byMileStone) => {
  return (
    <Stack>
      <Card>
        <Stack gap={0}>
          <Title order={3}>MileStone Categories</Title>
          <Text>Track progress across different developmental domains.</Text>
        </Stack>

        <Card>
          <Group justify="space-between">
            <Title order={4}>{props.text}</Title>
            <Badge variant="outline">78/95 achieved</Badge>
          </Group>

          <Text>Problem-solving, memory, and thinking skills</Text>
          <Group justify="space-between">
            <Text>Progress</Text>
            <Text>80%</Text>
          </Group>
          <Stack>
            <Progress value={50}></Progress>
            <Button>View MileStones</Button>
          </Stack>
        </Card>
      </Card>
    </Stack>
  );
};

export default ByMileStone;
