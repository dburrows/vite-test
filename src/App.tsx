import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

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
    </Box>
  );
}

export default App;
