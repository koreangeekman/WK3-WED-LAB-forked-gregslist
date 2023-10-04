
class JobsService {
  constructor(data) {
    console.log('jobs service')
    this.type = data.type

  }

}

export const jobsService = new JobsService();