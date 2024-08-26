import VehiclesCard from "../components/cards/VehiclesCard";
import { JSX } from "react/jsx-runtime";

interface GetVehicleCardsProps {
  vehicleInformationObj: Record<string, any>;
}

const getVehicleCards = (
  vehicleInformationObj: GetVehicleCardsProps["vehicleInformationObj"],
): JSX.Element[] => {
  let vehiclesCards: JSX.Element[] = [];
  for (const [key, value] of Object.entries(vehicleInformationObj)) {
    vehiclesCards.push(
      <VehiclesCard
        title={`Vehicle ${key}`}
        callToAction={`Manage ${key}`}
        content={`${value.length} Active ${key}`}
      />,
    );
  }

  return vehiclesCards;
};

export default getVehicleCards;
