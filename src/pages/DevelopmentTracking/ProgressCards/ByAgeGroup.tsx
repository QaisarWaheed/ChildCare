import {
  Badge,
  Card,
  Group,
  Stack,
  Title,
  Text,
  Progress,
  Button,
} from "@mantine/core";

const ByAgeGroup = () => {
  return (
    <Stack>
      <Card>
        <Stack>
          <Group justify="space-between">
            {" "}
            <Title order={4}> 0-6 Months </Title>
            <Badge variant="outline">90% Complete</Badge>
          </Group>

          <Group justify="space-between">
            <Text>Respond To Sounds</Text>
            <Text>23/45</Text>
          </Group>
          <Progress value={50}></Progress>
          <Group justify="space-between">
            <Text>HoldsUp Head</Text>
            <Text>23/45</Text>
          </Group>
          <Progress value={50}></Progress>
          <Group justify="space-between">
            <Text>Smiles at people</Text>
            <Text>23/45</Text>
          </Group>
          <Progress value={50}></Progress>

          <Group justify="space-between">
            <Text>Begins to bable</Text>
            <Text>23/45</Text>
          </Group>

          <Stack>
            <Progress value={50}></Progress>
            <Button>View All</Button>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default ByAgeGroup;
