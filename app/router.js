import { CarsController } from "./controllers/CarsController.js";
import { HomePageController } from "./controllers/HomePageController.js";
import { HomesController } from "./controllers/HomesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { CarsView } from "./views/CarsView.js";
import { HomePageView } from "./views/HomePageView.js";
import { HomesView } from "./views/HomesView.js";
import { JobsView } from "./views/JobsView.js";


export const router = [
  {
    path: '',
    controller: HomePageController,
    view: HomePageView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
  },
  {
    path: '#/homes',
    controller: HomesController,
    view: HomesView
  },
  {
    path: '#/jobs',
    controller: JobsController,
    view: JobsView
  }
]