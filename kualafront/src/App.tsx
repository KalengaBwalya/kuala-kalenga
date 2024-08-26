import "./App.css";
import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
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

function App() {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [vehicleVariants, setVehicleVariants] = useState([]);

  useEffect(() => {
    fetchVehicleInformation(getVehicleMakes, setVehicleMakes);
    fetchVehicleInformation(getVehicleModels, setVehicleModels);
    fetchVehicleInformation(getVehicleVariants, setVehicleVariants);
    // eslint-disable-next-line
  }, []);

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
          {vehiclesCards.map((vehiclesCard) => vehiclesCard)}
        </SimpleGrid>
      </main>
      <Footer />
    </>
  );
}

export default App;
