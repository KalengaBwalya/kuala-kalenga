import "./App.css";
import { useEffect, useState } from "react";
import { SimpleGrid, useToast } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {
  fetchVehicleInformation,
  getVehicleMakes,
  getVehicleModels,
  getVehicleVariants,
} from "./actions/vehicles";
import { JSX } from "react/jsx-runtime";
import getVehicleCards from "./helpers/cards";

const App: React.FC = () => {
  const [vehicleMakes, setVehicleMakes] = useState<string[]>([]);
  const [vehicleModels, setVehicleModels] = useState<string[]>([]);
  const [vehicleVariants, setVehicleVariants] = useState<string[]>([]);
  const toast = useToast();

  function loadingControl(): void {
    if (!toast.isActive("info-toast")) {
      toast({
        id: "info-toast",
        title: "Vehicle Information Loading...",
        description: "We are still waiting for something",
        status: "info",
        duration: 8000,
        isClosable: true,
        position: "bottom-right",
      });
    }
  }

  function toastSuccess(): void {
    loadingControl();
    setTimeout(function (): void {
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
    }, 9000);
  }

  function toastError(): void {
    loadingControl();
    setTimeout(function (): void {
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
    }, 9000);
  }

  async function checkDataAvailability(): Promise<void> {
    if (
      vehicleMakes.length !== 0 ||
      vehicleModels.length !== 0 ||
      vehicleVariants.length !== 0
    ) {
      toastSuccess();
    } else {
      toastError();
    }
  }

  useEffect(() => {
    checkDataAvailability();
    fetchVehicleInformation(getVehicleMakes, setVehicleMakes);
    fetchVehicleInformation(getVehicleModels, setVehicleModels);
    fetchVehicleInformation(getVehicleVariants, setVehicleVariants);
    // eslint-disable-next-line
  }, [vehicleMakes, vehicleModels, vehicleVariants]);

  const vehicleInformation: {
    Makes: string[];
    Models: string[];
    Variants: string[];
  } = {
    Makes: vehicleMakes,
    Models: vehicleModels,
    Variants: vehicleVariants,
  };

  return (
    <>
      <Header />
      <main>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {getVehicleCards(vehicleInformation).map(
            (vehiclesCard: JSX.Element) => vehiclesCard,
          )}
        </SimpleGrid>
      </main>
      <Footer />
    </>
  );
};

export default App;
