
export class Job {
  constructor(data) {
    console.log('job class')
    this.type = data.type

  }

  get jobData() {
    return `
      something
    `
  }
}