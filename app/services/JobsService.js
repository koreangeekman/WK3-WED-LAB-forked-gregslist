import { AppState } from "../AppState.js";
import { Job } from "../models/Job.js";
import { saveState } from "../utils/Store.js";

function _saveJobs() {
  saveState('jobs', AppState.jobs);
}

class JobsService {

  addJob(data) {
    AppState.jobs.push(new Job(data));
    _saveJobs();
    AppState.emit('jobs');
  }

  removeJob(id) {
    const jobIndex = AppState.jobs.findIndex(job => job.id == id);
    if (jobIndex == -1) {
      throw new Error('Job ID does not exist');
    }
    AppState.jobs.splice(jobIndex, 1);
    _saveJobs();
    AppState.emit('jobs');
  }

}

export const jobsService = new JobsService();