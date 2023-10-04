import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawCars() {
  const cars = AppState.cars
  let content = ''
  cars.forEach(car => content += car.CarCard)
  setHTML('cars', content)
}

export class CarsController {
  constructor() {
    console.log('Cars Controller is loaded', AppState.cars);
    _drawCars();
    AppState.on('cars', _drawCars);
  }

  createCar(event) {
    try {
      event.preventDefault()
      const form = event.target

      // const carData = {
      //   make: form.make.value,
      //   model: form.model.value
      // }

      // if (carData.isNew == 'on') {
      //   carData.isNew = true
      // }

      const carData = getFormData(form)
      carData.isNew = carData.isNew == 'on' // interpreting form data to create our expected boolean
      carData.runs = carData.runs == 'on'
      carsService.createCar(carData)

      form.reset()

    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

  async removeCar(carId) {
    const wantsToDelete = await Pop.confirm("Are you sure you want to delete this car?")

    if (!wantsToDelete) {
      return
    }
    // console.log('They want to delete!');

    carsService.removeCar(carId)
  }
}