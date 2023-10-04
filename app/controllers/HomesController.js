import { AppState } from "../AppState.js";
import { homesService } from "../services/HomesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawHomes() {
  let contentHTML = '';
  AppState.houses.forEach(house => contentHTML += house.houseCard)
  setHTML('houseCards', contentHTML);
}

export class HomesController {
  constructor() {
    console.log('Homes Controller Loaded', AppState.houses)
    _drawHomes();
    AppState.on(AppState.houses, _drawHomes())
  }

  addHouse(event) { // form submission
    event.preventDefault();
    homesService.addHouse(getFormData(event.target));
    event.target.reset();
    // _drawHomes();
  }

  async removeHouse(id) {
    if (!(await Pop.confirm("Remove this house?"))) {
      return
    }
    homesService.removeHouse(id);
    // _drawHomes();
  }
}