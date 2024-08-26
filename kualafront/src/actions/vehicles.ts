import axios from "axios";

export const getVehicleMakes = async (): Promise<any> =>
  await axios.get("https://whitebook-engine.kuala.io/get-vehicle-makes");

export const getVehicleModels = async (): Promise<any> =>
  await axios.get("https://whitebook-engine.kuala.io/model");

export const getVehicleVariants = async (): Promise<any> =>
  await axios.get("https://whitebook-engine.kuala.io/get-vehicle-variants/24");

export const fetchVehicleInformation = async (
  getter: () => Promise<any>,
  setter: (data: any) => void,
): Promise<void> => {
  try {
    let response = await getter();
    if (response) {
      const vehicleInformationData = await response.data;
      setter(vehicleInformationData.data);
    }
  } catch (error) {
    console.log(
      "Error in fetchVehicleInformation action",
      (error as Error).message,
    );
  }
};
