export const CarsView = `
<div class="container-fluid">

      <section class="row">
        <div class="col-12 p-3">
          <h1>Cars</h1>
        </div>
      </section>

      <section class="row justify-content-center">
        <div class="col-12 col-md-8 p-4 carFormCard">
          <form onsubmit="app.CarsController.createCar(event)">

            <div class="mb-2">
              <label for="make">Make</label>
              <input id="make" type="text" required minlength="2" maxlength="15" name="make" placeholder="Car Make...">
            </div>

            <div class="mb-2">
              <label for="model">Model</label>
              <input id="model" type="text" required maxlength="40" name="model" placeholder="Car Model...">
            </div>

            <div class="mb-2">
              <label for="year">Year</label>
              <input id="year" type="number" required min="1900" max="2024" placeholder="2020" name="year">
            </div>

            <div class="mb-2">
              <label for="mileage">Mileage</label>
              <input id="mileage" type="number" required min="0" max="5000000" placeholder="100000" name="mileage">
            </div>

            <div class="mb-2">
              <label for="runs">Does the car run?</label>
              <input class="checkbox" id="runs" type="checkbox" name="runs" checked>
            </div>


            <div class="mb-2">
              <label for="imgUrl">Image URL</label>
              <input id="imgUrl" type="url" required maxlength="400" name="imgUrl" placeholder="Car ImgUrl...">
            </div>

            <div class="mb-2">
              <label for="isNew">Is this a new car?</label>
              <input class="checkbox" id="isNew" type="checkbox" name="isNew">
            </div>

            <div class="mb-2">
              <label for="price">Price</label>
              <input id="price" type="number" required name="price" min="0" max="1000000">
            </div>

            <div class="mb-2">
              <label for="color">Color</label>
              <input class="color" id="color" type="color" name="color" value="#000000">
            </div>

            <div class="mb-2">
              <label for="description">Description</label>
              <textarea name="description" id="description" rows="5" placeholder="Car Description..."
                maxlength="300"></textarea>
            </div>


            <div>
              <button class="btn btn-success" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>

      <section id="cars" class="row justify-content-center">
        <!-- <div class="col-10">
          <div class="d-flex shadow">
            <img class="car-img"
              src="https://images.unsplash.com/photo-1561043845-2f5e09749871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Mazda Miata">
            <div class="p-3">
              <h2><i class="mdi mdi-shimmer"></i> 2004 Mazda Miata</h2>
              <p>12/12/2000</p>
              <h3>50000 miles</h3>
              <h3>$20000</h3>
              <h3>It runs</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure nam quod sit voluptatem dolorum
                molestiae illum? Quidem incidunt voluptates sed.</p>
            </div>
          </div>
        </div> -->
      </section>
    </div>
`