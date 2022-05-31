import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { SummaryCard } from "./design_system/SummaryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="App" p={5}>
      <Box>
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </Box>
      <Box>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me : {count}
        </Button>
      </Box>
      <SummaryCard title="A Card" text="some text" />
    </Box>
  );
}

export default App;
