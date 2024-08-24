import "./App.css";
import { useEffect, useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import VehiclesCard from "./components/cards/VehiclesCard";
import {
  getVehicleMakes,
  getVehicleModels,
  getVehicleVariants,
} from "./actions/vehicles";

function App() {
  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [vehicleVariants, setVehicleVariants] = useState([]);
  const fetchVehicleMakes = async () => {
    try {
      let response = await getVehicleMakes();
      if (response) {
        const vehicleMakesData = await response.data;
        setVehicleMakes(vehicleMakesData.data);
      }
    } catch (error) {
      console.log("Error in fetchReminisces", error.message);
    }
  };
  const fetchVehicleModels = async () => {
    try {
      let response = await getVehicleModels();
      if (response) {
        const vehicleModelsData = await response.data;
        setVehicleModels(vehicleModelsData.data);
      }
    } catch (error) {
      console.log("Error in fetchReminisces", error.message);
    }
  };
  const fetchVehicleVariants = async () => {
    try {
      let response = await getVehicleVariants();
      if (response) {
        const vehicleVariantsData = await response.data;
        setVehicleVariants(vehicleVariantsData.data);
      }
    } catch (error) {
      console.log("Error in fetchReminisces", error.message);
    }
  };
  useEffect(() => {
    fetchVehicleMakes();
    fetchVehicleModels();
    fetchVehicleVariants();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <main>
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          <VehiclesCard
            name={"Vehicle Makes"}
            data={vehicleMakes}
            cta={"Manage Makes"}
          />
          <VehiclesCard
            name={"Vehicle Models"}
            data={vehicleModels}
            cta={"Manage Models"}
          />
          <VehiclesCard
            name={"Vehicle Variants"}
            data={vehicleVariants}
            cta={"Manage Variants"}
          />
        </SimpleGrid>
      </main>
      <Footer />
    </>
  );
}

export default App;
