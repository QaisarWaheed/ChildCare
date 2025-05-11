import {
  Card,
  Text,
  Group,
  Stack,
  Title,
  Button,
  ButtonGroup,
} from "@mantine/core";
import SideBar from "../../LayOuts/SideBar";

import Appointments from "./Appointments";
import RecentScreening from "./RecentScreenings";

const Dashboard = () => {
  return (
    <Stack>
      <Group gap={100}>
        <Stack justify="space-between">
          <Group justify="space-between">
            <Stack gap={0}>
              <Title>DashBoard</Title>
              <Text>
                Welcome to the pediatric Care for Child Development platform.
              </Text>
            </Stack>
            <Button> Start Telemedicine Session</Button>
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
            <Card variant="outline">
              <Stack>
                <Text>Upcoming Anointments</Text>
                <Text>245</Text>
                <Text> +12% form last month</Text>
              </Stack>
            </Card>
          </Group>
          <Button.Group>
            <Button variant="default">OverView</Button>
            <Button variant="default">Appointments</Button>
            <Button variant="default">Recent Screenings</Button>
          </Button.Group>
          {/* <OverView />
           */}
          {/* <Appointments /> */}
          <RecentScreening />
        </Stack>
      </Group>
    </Stack>
  );
};

export default Dashboard;
