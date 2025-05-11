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
import IconSearch from "../../assets/icons/IconSearch";
import ByMileStone from "./ProgressCards/ByMileStone";
import PatientDetailsCard from "./ProgressCards/patientDetailsCard";
import ByAgeGroup from "./ProgressCards/ByAgeGroup";

const DevelopmentTracking = () => {
  return (
    <Stack>
      <Group gap={100}>
        <Stack justify="space-between">
          <Group justify="space-between">
            <Stack gap={0}>
              <Title>Development Tracking</Title>
              <Text>
                Secure and centralized tracking of child development milestones.
              </Text>
            </Stack>
            <Button> Add MileStone</Button>
          </Group>
          <Group>
            <Card variant="outline">
              <Stack>
                <Text>Total mileStone</Text>
                <Text>245</Text>
                <Text> Across All children</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>MileStone Achieved</Text>
                <Text>45</Text>
                <Text> +11% completion rate</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>In Progress</Text>
                <Text>245</Text>
                <Text> Currently being monitored</Text>
              </Stack>
            </Card>
            <Card variant="outline">
              <Stack>
                <Text>Up coming</Text>
                <Text>245</Text>
                <Text> Expected in next 3 months</Text>
              </Stack>
            </Card>
          </Group>
          <Group justify="space-between">
            <Input
              leftSection={<IconSearch />}
              type="text"
              placeholder="Search Screenings..."
              w={"80%"}
            ></Input>
            <Menu>
              <Menu.Target>
                <Button>All Categories</Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Completed</Menu.Label>
                <Menu.Label>Pending</Menu.Label>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Stack>
      </Group>
      <Button.Group>
        <Button variant="default">By Child</Button>
        <Button variant="default">By MileStone</Button>
        <Button variant="default">By Age Group </Button>
      </Button.Group>
      <Card>
        <Stack gap={50}>
          <Stack gap={0}>
            <Title order={3}>MileStone Categories</Title>
            <Text>Track progress across different developmental domains.</Text>
          </Stack>
          <SimpleGrid cols={3}>
            <PatientDetailsCard />
            <PatientDetailsCard />
            <PatientDetailsCard />
            <PatientDetailsCard />
            <PatientDetailsCard />
            <PatientDetailsCard />
          </SimpleGrid>

          {/* <SimpleGrid cols={1}>
            <ByAgeGroup />
            <ByAgeGroup />
            <ByAgeGroup />
          </SimpleGrid> */}

          {/*bymilestone*/}

          {/* <ByMileStone text="Cognitive Development" />
          <ByMileStone text="Cognitive Development" /> */}
        </Stack>
      </Card>

      <Card>
        <Stack>
          <Stack gap={0}>
            <Title order={3}> Centralized MileStone Tracking</Title>
            <Text>
              Our platform provides secure and comprehensive tracking of child
              development milestones across all domains.
            </Text>
          </Stack>
          <Group>
            <Card w={"100%"}>
              <Stack>
                <Title order={4}>Key Features</Title>
                <Text>
                  1. Input child's developmental screening results and medical
                  history
                  <br></br> 2. AI analyzes data and identifies areas for focus
                  <br></br> 3.System generates personalized care plan
                  recommendations
                  <br></br> 4.Healthcare professionals review and approve the
                  plan <br></br> 5. Parents receive detailed guidance and
                  resources
                </Text>
              </Stack>
            </Card>
          </Group>
          <Group>
            <Card>
              <Title order={4}>For Parents</Title>
              <Text>
                1. Personalized to each child's unique needs
                <br></br> 2. Evidence-based recommendations
                <br></br> 3. Regular updates based on progress recommendations
                <br></br> 4. Accessible to parents and professionals{" "}
              </Text>
            </Card>
            <Card>
              <Title order={4}>For Professional</Title>
              <Text>
                1. Personalized to each child's unique needs
                <br></br> 2. Evidence-based recommendations
                <br></br> 3. Regular updates based on progress recommendations
                <br></br> 4. Accessible to parents and professionals{" "}
              </Text>
            </Card>
          </Group>

          <Button>View Detailed MileStone Guide</Button>
        </Stack>
      </Card>
    </Stack>
  );
};

export default DevelopmentTracking;
