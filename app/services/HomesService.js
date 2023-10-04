import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";

function _saveHomes() {
  saveState('houses', AppState.houses);
}

class HomesService {

  addHouse(data) {
    AppState.houses.push(new House(data));
    _saveHomes();
    AppState.emit('houses');
  }

  removeHouse(id) {
    const houseIndex = AppState.houses.findIndex(house => house.id == id);
    if (houseIndex == -1) {
      throw new Error('House ID does not exist');
    }
    AppState.houses.splice(houseIndex, 1);
    _saveHomes();
    AppState.emit('houses');
  }
}

export const homesService = new HomesService();