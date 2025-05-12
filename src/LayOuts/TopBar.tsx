import { Button, Group } from "@mantine/core";
import { useNavigate } from "react-router";

const TopBar = () => {
  const Navigate = useNavigate();
  return (
    <Group justify="end">
      <Button
        onClick={(event) => {
          Navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        onClick={(event) => {
          Navigate("/login");
        }}
      >
        Signup
      </Button>
    </Group>
  );
};

export default TopBar;
