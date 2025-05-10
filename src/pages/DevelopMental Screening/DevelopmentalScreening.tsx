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
  List,
  Menu,
} from "@mantine/core";
import SideBar from "../../LayOuts/SideBar";
import IconList from "../../assets/icons/IconList";
import IconSearch from "../../assets/icons/IconSearch";

const DevelopmentalScreening = () => {
  return (
    <Stack>
      <Group gap={100} w={"100%"}>
        <SideBar></SideBar>
        <Stack justify="space-between" w={"80%"}>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title>DashBoard</Title>
              <Text>
                Welcome to the pediatric Care for Child Development platform.
              </Text>
            </Stack>
            <Button> New Screening</Button>
          </Group>
          <Group>
            <Card variant="outline">
              <Stack>
                <Text>Total patients</Text>
                <Text>245</Text>
                <Text> +12% form last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Screenings Completed</Text>
                <Text>45</Text>
                <Text> +11% form last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Care Plans Created</Text>
                <Text>245</Text>
                <Text> +12% form last month</Text>
              </Stack>
            </Card>
          </Group>
          <Group justify="space-between">
            <Input
              leftSection={<IconSearch />}
              type="text"
              placeholder="Search Screenings..."
              w={"90%"}
            ></Input>
            <Menu>
              <Menu.Target>
                <Button w={"7%"}>Filter</Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Completed</Menu.Label>
                <Menu.Label>Pending</Menu.Label>
              </Menu.Dropdown>
            </Menu>
          </Group>

          <Button.Group>
            <Button variant="default">All Screening</Button>
            <Button variant="default">Cognitive</Button>
            <Button variant="default">Motor Skills</Button>
            <Button variant="default">Language</Button>
            <Button variant="default">Social-Emotional</Button>
          </Button.Group>

          <Card>
            <Stack>
              <Group justify="space-between">
                <Text>Patient</Text>
                <Text>Age</Text>
                <Text>Date</Text>
                <Text>Status</Text>
                <Text>ACtions</Text>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text>Emma</Text>
                <Text>2</Text>
                <Text>May 2025</Text>
                <Badge color="green">Completed</Badge>
                <IconList></IconList>
              </Group>

              <Divider />

              <Group justify="space-between">
                <Text>Emma</Text>
                <Text>2</Text>
                <Text>May 2025</Text>
                <Badge color="red" variant="outline">
                  Pending
                </Badge>
                <IconList></IconList>
              </Group>
              <Divider />
              <Group justify="space-between">
                <Text>Emma</Text>
                <Text>2</Text>
                <Text>May 2025</Text>
                <Badge color="green">Completed</Badge>
                <IconList></IconList>
              </Group>
              <Divider />
            </Stack>
          </Card>
          <Card>
            <Stack>
              <Stack gap={0}>
                <Title order={3}> AI-Driven Screening Tools</Title>
                <Text>
                  Our AI-powered screening tools help identify developmental
                  concerns early and provide actionable recommendations.
                </Text>
              </Stack>
              <Group>
                <Card>
                  <Stack>
                    <Title order={4}>Cognitive Assessment</Title>
                    <Text>
                      Evaluates problem-solving, memory, and attention skills
                    </Text>
                    <Group justify="space-between">
                      <Text>Completion Rate</Text>
                      <Text>85%</Text>
                    </Group>
                    <Progress value={50}></Progress>
                    <Button>Start Assessment</Button>
                  </Stack>
                </Card>
                <Card>
                  <Stack>
                    <Title order={4}>Cognitive Assessment</Title>
                    <Text>
                      Evaluates problem-solving, memory, and attention skills
                    </Text>
                    <Group justify="space-between">
                      <Text>Completion Rate</Text>
                      <Text>85%</Text>
                    </Group>
                    <Progress value={50}></Progress>
                    <Button>Start Assessment</Button>
                  </Stack>
                </Card>
                <Card>
                  <Stack>
                    <Title order={4}>Cognitive Assessment</Title>
                    <Text>
                      Evaluates problem-solving, memory, and attention skills
                    </Text>
                    <Group justify="space-between">
                      <Text>Completion Rate</Text>
                      <Text>85%</Text>
                    </Group>
                    <Progress value={50}></Progress>
                    <Button>Start Assessment</Button>
                  </Stack>
                </Card>
              </Group>
              <Button>View All Screening Tools</Button>
            </Stack>
          </Card>
        </Stack>
      </Group>
    </Stack>
  );
};

export default DevelopmentalScreening;
