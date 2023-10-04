export const JobsView = `
    <div class="container-fluid">
      <div class="row justify-content-center">

        <!-- SECTION NEW JOB FORM -->
        <div class="col-12 col-md-8 p-3">
          <form class="p-3 p-md-4 formCard" onsubmit="app.JobsController.addJob(event)">
            <p class="fs-3 fw-bold">New Job Form</p>
            <span class="">
            <label for="position">Position:</label>
            <input class="form-control" type="text" name="position" id="position" max-length="30" placeholder="Engineer" required>
            </span>
            <span class="">
              <label for="location">Location:</label>
              <input class="form-control" type="text" name="location" id="location" max-length="30" placeholder="HQ/Remote/Etc" required>
            </span>
            <span class="">
              <label for="pay">Pay:</label>
              <span class="d-flex align-items-center ps-2">$
                <input class="form-control" type="number" name="pay" id="pay" min="0" max="1000000"
                  placeholder="128000" required>
              </span>
            </span>
            <span class="">
              <label for="description">Description:</label>
              <textarea class="form-control" type="text" name="description" id="description" minlength="10"
                maxlength="320" placeholder="Please enter a short description" rows="3" required></textarea>
            </span>
            <span class="">
              <label for="imgUrl">Image URL:</label>
              <input class="form-control" type="url" name="imgUrl" id="imgUrl"
                placeholder="Please submit a URL for the image" maxlength="200">
            </span>
            <button class="btn btn-success my-3" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <!-- !SECTION NEW JOB FORM -->

      <!-- SECTION JOB CARD -->
      <div class="row justify-content-center" id="jobCards">
        <!-- HOME CARD VIEWPORT -->
      </div>
      <!-- !SECTION JOB CARD -->

    </div>
  `