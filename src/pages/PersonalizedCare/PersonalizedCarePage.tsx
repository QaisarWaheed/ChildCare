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

const PersonalizedCarePage = () => {
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
            <Button> New Care Plan</Button>
          </Group>
          <Group>
            <Card variant="outline">
              <Stack>
                <Text>Active care plans</Text>
                <Text>245</Text>
                <Text> +12% form last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Recently Updated</Text>
                <Text>45</Text>
                <Text> +11% form last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Pending Review</Text>
                <Text>245</Text>
                <Text> +12% form last month</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Completed</Text>
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
            <Button variant="default">All Plans</Button>
            <Button variant="default">Cognitive</Button>
            <Button variant="default">Motor Skills</Button>
            <Button variant="default">Language</Button>
            <Button variant="default">Social-Emotional</Button>
          </Button.Group>

          <Stack>
            <Group>
              <Card>
                <Stack>
                  <Group justify="space-between">
                    <Stack gap={0}>
                      <Title order={5}>Emma</Title>
                      <Text>2 years</Text>
                      <Text>Plan Type: Comprehensive Development </Text>
                    </Stack>
                    <Badge color="Blue">Active</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text>Last Updated: </Text>
                    <Text>2 Days ago </Text>
                  </Group>
                  <Group justify="space-between">
                    <Button variant="outline" color="white">
                      View Details
                    </Button>
                    <Button>Update Plan</Button>
                  </Group>
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <Group justify="space-between">
                    <Stack gap={0}>
                      <Title order={5}>Emma</Title>
                      <Text>2 years</Text>
                      <Text>Plan Type: Comprehensive Development </Text>
                    </Stack>
                    <Badge color="Blue">Active</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text>Last Updated: </Text>
                    <Text>2 Days ago </Text>
                  </Group>
                  <Group justify="space-between">
                    <Button variant="outline" color="white">
                      View Details
                    </Button>
                    <Button>Update Plan</Button>
                  </Group>
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <Group justify="space-between">
                    <Stack gap={0}>
                      <Title order={5}>Emma</Title>
                      <Text>2 years</Text>
                      <Text>Plan Type: Comprehensive Development </Text>
                    </Stack>
                    <Badge color="Blue">Active</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text>Last Updated: </Text>
                    <Text>2 Days ago </Text>
                  </Group>
                  <Group justify="space-between">
                    <Button variant="outline" color="white">
                      View Details
                    </Button>
                    <Button>Update Plan</Button>
                  </Group>
                </Stack>
              </Card>
            </Group>
            <Group>
              <Card>
                <Stack>
                  <Group justify="space-between">
                    <Stack gap={0}>
                      <Title order={5}>Emma</Title>
                      <Text>2 years</Text>
                      <Text>Plan Type: Comprehensive Development </Text>
                    </Stack>
                    <Badge color="Blue">Active</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text>Last Updated: </Text>
                    <Text>2 Days ago </Text>
                  </Group>
                  <Group justify="space-between">
                    <Button variant="outline" color="white">
                      View Details
                    </Button>
                    <Button>Update Plan</Button>
                  </Group>
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <Group justify="space-between">
                    <Stack gap={0}>
                      <Title order={5}>Emma</Title>
                      <Text>2 years</Text>
                      <Text>Plan Type: Comprehensive Development </Text>
                    </Stack>
                    <Badge color="Blue">Active</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text>Last Updated: </Text>
                    <Text>2 Days ago </Text>
                  </Group>
                  <Group justify="space-between">
                    <Button variant="outline" color="white">
                      View Details
                    </Button>
                    <Button>Update Plan</Button>
                  </Group>
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <Group justify="space-between">
                    <Stack gap={0}>
                      <Title order={5}>Emma</Title>
                      <Text>2 years</Text>
                      <Text>Plan Type: Comprehensive Development </Text>
                    </Stack>
                    <Badge color="Blue">Active</Badge>
                  </Group>
                  <Group justify="space-between">
                    <Text>Last Updated: </Text>
                    <Text>2 Days ago </Text>
                  </Group>
                  <Group justify="space-between">
                    <Button variant="outline" color="white">
                      View Details
                    </Button>
                    <Button>Update Plan</Button>
                  </Group>
                </Stack>
              </Card>
            </Group>
          </Stack>

          <Card>
            <Stack>
              <Stack gap={0}>
                <Title order={3}> AI-Powered Care Plan Generation</Title>
                <Text>
                  Our AI system creates personalized care plans based on
                  individual child data, medical history, and input from
                  healthcare professionals.
                </Text>
              </Stack>
              <Group>
                <Card w={"100%"}>
                  <Stack>
                    <Title order={4}>How It Works</Title>
                    <Text>
                      1. Input child's developmental screening results and
                      medical history
                      <br></br> 2. AI analyzes data and identifies areas for
                      focus
                      <br></br> 3.System generates personalized care plan
                      recommendations
                      <br></br> 4.Healthcare professionals review and approve
                      the plan <br></br> 5. Parents receive detailed guidance
                      and resources
                    </Text>
                  </Stack>
                </Card>
              </Group>
              <Group>
                <Card>
                  <Title order={4}>Benefits</Title>
                  <Text>
                    1. Personalized to each child's unique needs
                    <br></br> 2. Evidence-based recommendations
                    <br></br> 3. Regular updates based on progress
                    recommendations
                    <br></br> 4. Accessible to parents and professionals{" "}
                  </Text>
                </Card>
                <Card>
                  <Title order={4}>Benefits</Title>
                  <Text>
                    1. Personalized to each child's unique needs
                    <br></br> 2. Evidence-based recommendations
                    <br></br> 3. Regular updates based on progress
                    recommendations
                    <br></br> 4. Accessible to parents and professionals{" "}
                  </Text>
                </Card>
              </Group>

              <Button>Generate New AI care Plan</Button>
            </Stack>
          </Card>
        </Stack>
      </Group>
    </Stack>
  );
};

export default PersonalizedCarePage;
