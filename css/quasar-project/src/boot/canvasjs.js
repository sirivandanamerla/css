import { createApp } from "vue";
import CanvasJSChart from "@canvasjs/vue-charts";

export default ({ app }) => {
  // Install CanvasJSChart globally
  app.use(CanvasJSChart);
};
