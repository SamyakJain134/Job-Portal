import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobspostService } from 'src/app/services/jobspost.service';



@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  jobs: Job[] = [];
  constructor(private jobService: JobspostService , private router : Router) {}

  ngOnInit() {
    this.getJobs();
  }
  getJobs(){
    this.jobService.getAllJobs().subscribe((resp) => {
      this.jobs = resp;
      console.log(this.jobs)
    })
  }
  // deleteJob(jid) {
  //   this.jobService.deleteJob(jid).subscribe((resp) => {
  //     if (resp.message == 'Deleted successfully') {
  //       alert('Deleted successfully');
  //       this.getJobs();
  //     }
  //   })
  // }
 
  // editJob(jid) {
  //    this.router.navigate(['editjob/' + jid])
  // }
  
  
}
