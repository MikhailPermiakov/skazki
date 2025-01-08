import path from "path";
import { defineNuxtModule } from "nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "login",
    configKey: "login",
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