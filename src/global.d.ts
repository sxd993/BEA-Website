declare module "*.jsx" {
  import React from "react";
  const component: React.FC<React.PropsWithChildren>;
  export default component;
}
