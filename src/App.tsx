import { MantineProvider } from "@mantine/core";

import { RouterProvider } from "react-router";
import router from "./router";
import mantineTheme from "./maintine/mantineTheme";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" theme={mantineTheme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
