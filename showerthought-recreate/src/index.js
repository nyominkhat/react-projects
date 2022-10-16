import { createRoot } from "react-dom/client";

// import HackerNews from "./HackerNews";
import Reddit from "./Reddit";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Reddit />);
