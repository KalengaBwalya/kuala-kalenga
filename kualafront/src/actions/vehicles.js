import axios from "axios";

export const getVehicleMakes = async () =>
  await axios.get("https://whitebook-engine.kuala.io/get-vehicle-makes");

export const getVehicleModels = async () =>
  await axios.get("https://whitebook-engine.kuala.io/model");

export const getVehicleVariants = async () =>
  await axios.get("https://whitebook-engine.kuala.io/get-vehicle-variants/24");
