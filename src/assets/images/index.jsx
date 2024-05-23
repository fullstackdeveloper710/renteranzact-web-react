import logo from "./logo.png";
import inspectionHouse from "./inspectionsHouse.png";
import inspectionRequestDoneIMg from "./inspectionRequestDone.png";
export const AppLogo = () => (
  <img src={logo} style={{ height: 26, width: 221 }} />
);
export const inspectionHouseImgCard = () => (
  <img style={{ maxWidth: "100%" }} src={inspectionHouse} />
);
export const inspectionRequestDone = () => (
  <img style={{ maxWidth: "100%" }} src={inspectionRequestDoneIMg} />
);
