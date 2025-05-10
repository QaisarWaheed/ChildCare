import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Divider,
  Group,
  UnstyledButton,
} from "@mantine/core";
import { Outlet, useLocation, useNavigate } from "react-router";

import { Fragment } from "react/jsx-runtime";
import { Children } from "react";

const links = [
  {
    name: "Dashboard",
    to: "/dashboard",
  },
  {
    name: "Browse Services",
    to: "/browse-services",
    Children: [
      {
        name: "Services",
        to: "/browse-services/service",
      },
    ],
  },
  {
    name: "Project Tracker",
    to: "/project-tracker",
  },
  {
    name: "Tickets",
    to: "/tickets",
  },
  {
    name: "Order History",
    to: "/order-history",
  },
  {
    name: "Invoices",
    to: "/invoices",
  },
  {
    name: "Profile",
    to: "/client-profile",
  },
];

const Links = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Fragment>
      {links.map((link) => {
        return (
          <UnstyledButton
            onClick={() => navigate(link.to)}
            className="control"
            c={location.pathname.includes(link.to) ? "blue" : undefined}
            key={link.name}
          >
            {link.name}
          </UnstyledButton>
        );
      })}
    </Fragment>
  );
};

function ClientDashboardLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            LOGO
            <Group ml="xl" visibleFrom="sm">
              <Links />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Links />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export default ClientDashboardLayout;
