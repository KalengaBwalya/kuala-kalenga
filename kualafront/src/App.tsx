import "./App.css";
import { useEffect, useState } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import VehiclesCard from "./components/cards/VehiclesCard";
import {
  fetchVehicleInformation,
  getVehicleMakes,
  getVehicleModels,
  getVehicleVariants,
} from "./actions/vehicles";
import { JSX } from "react/jsx-runtime";

const App: React.FC = () => {
  const [vehicleMakes, setVehicleMakes] = useState<string[]>([]);
  const [vehicleModels, setVehicleModels] = useState<string[]>([]);
  const [vehicleVariants, setVehicleVariants] = useState<string[]>([]);
  const toast = useToast();

  async function checkDataAvailability(): Promise<void> {
    if (
      vehicleMakes.length !== 0 ||
      vehicleModels.length !== 0 ||
      vehicleVariants.length !== 0
    ) {
      if (!toast.isActive("success-toast")) {
        toast({
          id: "success-toast",
          title: "Vehicle Information Available",
          description: "You are lucky we received something",
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    } else {
      if (!toast.isActive("error-toast") && !toast.isActive("success-toast")) {
        toast({
          id: "error-toast",
          title: "Vehicle Information Unavailable",
          description: "Oops... we didn't receive anything",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom-right",
        });
      }
    }
  }

  useEffect(() => {
    checkDataAvailability();
    fetchVehicleInformation(getVehicleMakes, setVehicleMakes);
    fetchVehicleInformation(getVehicleModels, setVehicleModels);
    fetchVehicleInformation(getVehicleVariants, setVehicleVariants);
    // eslint-disable-next-line
  }, [vehicleMakes, vehicleModels, vehicleVariants]);

  let vehiclesCards: JSX.Element[] = [];

  for (const [key, value] of Object.entries({
    Makes: vehicleMakes,
    Models: vehicleModels,
    Variants: vehicleVariants,
  })) {
    vehiclesCards.push(
      <VehiclesCard
        title={`Vehicle ${key}`}
        callToAction={`Manage ${key}`}
        content={`${value.length} Active ${key}`}
      />,
    );
  }

  return (
    <>
      <Header />
      <main>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {vehiclesCards.map((vehiclesCard: JSX.Element) => vehiclesCard)}
        </SimpleGrid>
      </main>
      <Footer />
    </>
  );
};

export default App;
