import { Stack, Text, Title } from "@mantine/core";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <Stack gap={2}>
      <Title order={2}>{title}</Title>
      <Text c="dimmed">{subtitle}</Text>
    </Stack>
  );
};

export default PageTitle;
