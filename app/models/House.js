import { generateId } from "../utils/GenerateId.js"

export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get houseCard() {
    return `
        <div class="col-12 col-md-4 p-2">
          <div class="card shadow p-3">
            <img src="${this.imgUrl}" alt="house image">
              <div class="d-flex justify-content-between align-items-center overlay p-2">
                <p class="fs-5 fw-bold price">$${this.price}</p>
                <i class="fs-1 remove btn mdi mdi-trash-can" onclick="app.HomesController.removeHouse('${this.id}')"></i>
              </div>
            <div class="d-flex justify-content-evenly">
              <div>
                <p><b>Year</b>: ${this.year}</p>
                <p><b>Sqft</b>: ${this.sqft}</p>
              </div>
              <div>
                <p><b>Bedrooms</b>: ${this.bedrooms}</p>
                <p><b>Bathrooms</b>: ${this.bathrooms}</p>
              </div>
            </div>
            <p><b>Description</b>: ${this.description}</p>
          </div>
        </div>
    `
  }
}