import path from "path";
import { defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "library",
    configKey: "library",
  },
  hooks: {
    "components:dirs"(dirs: any) {
      dirs.push({
        path: path.resolve(__dirname, "./components"),
        pathPrefix: false,
      });
    },
  },
  setup() {
  },
});