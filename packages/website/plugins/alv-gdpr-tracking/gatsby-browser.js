import { addTracking } from "./src/";

export const onClientEntry = (_, pluginOptions) => {
  addTracking(pluginOptions);
};
