import {
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  Image,
  Input,
  Radio,
  Checkbox,
} from "@mantine/core";
import PageTitle from "../../Components/PageTitle";

const UserProfile = () => {
  return (
    <Stack mb={"xl"}>
      <Group ml={"100px"}>
        <PageTitle title="Invoices" subtitle="View and manage your invoices" />
        <Group></Group>
      </Group>
      <Divider mr={"100px"} ml={"100px"} />

      <Group justify="space-between" align="middle" ml={"100px"} mr={"100px"}>
        <Card w={"35%"}>
          <Stack mb={"100px"}>
            <Title order={4}>Profile Picture</Title>
            <Text>Manage your account information and preferences</Text>
            <Group justify="center" align="center">
              <div>
                <Image
                  style={{
                    border: "1px solid",
                    borderRadius: "100px",
                  }}
                  src=""
                  alt="picture"
                ></Image>
              </div>
            </Group>
            <Button variant="outline" c={"white"}>
              Change
            </Button>
          </Stack>
        </Card>
        <Card bg={"#0a0f1c"} w={"fit-content"}>
          <Stack gap={0}>
            <Title order={2}>Personal Information</Title>
            <Text>Update Your Personal Details</Text>
          </Stack>
          <Group justify="space-between">
            <Stack gap={0}>
              <Text>First Name</Text>
              <Input
                style={{
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#141B2B",
                }}
                variant="outline"
                type="text"
                placeholder="First Name"
              />
            </Stack>
            <Stack gap={0}>
              <Text>Last Name</Text>
              <Input
                style={{
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#141B2B",
                }}
                variant="outline"
                type="text"
                placeholder="Last Name"
              />
            </Stack>
          </Group>
          <Group>
            <Stack gap={0} w={"100%"}>
              <Text>Email</Text>
              <Input
                style={{
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#141B2B",
                }}
                variant="outline"
                type="text"
                placeholder="Email Name"
              />
            </Stack>
          </Group>
          <Group>
            <Stack gap={0} w={"100%"}>
              <Text>Password</Text>
              <Input
                style={{
                  border: "1px solid",
                  borderRadius: "8px",
                  borderColor: "#141B2B",
                }}
                variant="outline"
                type="password"
                placeholder="Password"
              />
            </Stack>
          </Group>
          <Group justify="space-between" mt={"lg"}>
            <Button variant="outline" color="white">
              Cancel
            </Button>
            <Button>Save Changes</Button>
          </Group>
        </Card>
      </Group>
      <Card m={"md"} ml={"100px"} mr={"100px"}>
        <Stack>
          <Group justify="space-between">
            <Stack gap={0}>
              <Title order={2}>Payment Method</Title>
              <Text>Manage you saved payment methods</Text>
            </Stack>
            <Group>
              <Button variant="outline" color="white">
                View All Invoices
              </Button>
            </Group>
          </Group>
          <Card>
            <Group justify="space-between">
              <Group>
                <Radio></Radio>
                <Image alt="card image" w={"fit-content"}></Image>
                <Stack gap={0}>
                  <Text>Visa Ending With 4242</Text>
                  <Text>Expires 12/26</Text>
                </Stack>
              </Group>
              <Checkbox></Checkbox>
            </Group>
          </Card>
          <Card>
            <Group justify="space-between">
              <Group>
                <Radio></Radio>
                <Image alt="card image" w={"fit-content"}></Image>
                <Stack gap={0}>
                  <Text>Visa Ending With 4242</Text>
                  <Text>Expires 12/26</Text>
                </Stack>
              </Group>
              <Checkbox></Checkbox>
            </Group>
          </Card>
          <Button variant="outline" color="white">
            Add New Payment Method
          </Button>
        </Stack>
      </Card>
      <Card ml={"100px"} mr={"100px"}>
        <Stack>
          <Stack gap={0}>
            <Title order={4}>Password</Title>
            <Text>Change You Password</Text>
          </Stack>
          <Stack gap={0}>
            <Text>Current Password</Text>
            <Input
              type="password"
              placeholder="Current Password"
              style={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#141B2B",
              }}
              variant="outline"
            ></Input>
          </Stack>

          <Stack gap={0}>
            <Text>New Password</Text>
            <Input
              type="password"
              placeholder="New Password"
              style={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#141B2B",
              }}
              variant="outline"
            ></Input>
          </Stack>

          <Stack gap={0}>
            <Text>Confirm Password</Text>
            <Input
              type="password"
              placeholder="Confirm Password"
              style={{
                border: "1px solid",
                borderRadius: "8px",
                borderColor: "#141B2B",
              }}
              variant="outline"
            ></Input>
          </Stack>
          <Group justify="space-between">
            <Button variant="outline" color="white">
              Cancel
            </Button>
            <Button> Save Changes</Button>
          </Group>
        </Stack>
      </Card>
    </Stack>
  );
};

export default UserProfile;
