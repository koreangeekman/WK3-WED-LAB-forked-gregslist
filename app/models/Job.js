import { generateId } from "../utils/GenerateId.js"

export class Job {
  constructor(data) {
    this.id = data.id || generateId()
    this.position = data.position
    this.description = data.description
    this.location = data.location
    this.pay = data.pay
    this.imgUrl = data.imgUrl
    this.listedAt = data.listedAt ? new Date(data.listedAt).toLocaleString() : new Date().toLocaleString()
  }

  get jobCard() {
    return `
      <div div class="col-12 col-md-4 p-2">
        <div class="card shadow p-3">
          <img src="${this.imgUrl}" alt="job image">
            <div class="d-flex justify-content-between align-items-center overlay p-2">
              <p class="fs-5 fw-bold price">$${this.pay}</p>
              <i class="fs-1 remove btn mdi mdi-trash-can" onclick="app.JobsController.removeJob('${this.id}')"></i>
            </div>
            <div>
              <p><b>Position</b>: ${this.position}</p>
              <p><b>Location</b>: ${this.location}</p>
            </div>
            <p><b>Description</b>: ${this.description}</p>
            <p class="text-secondary w-100 text-end"><small>Listed At: ${this.listedAt}</small></p>
        </div>
      </div >
    `
  }
}