import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobspostService } from 'src/app/services/jobspost.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  jobForm: FormGroup
  editJobId: number;
  constructor(
    private fb: FormBuilder,
    private jobService: JobspostService,
    private acr: ActivatedRoute) { }
//getjob by id service me define hoga 
  ngOnInit() {
    // // this.createForm();
    // this.editJobId = this.acr.snapshot.params['id']
    // if (this.editJobId) {
    //   // this.jobService.getJobById(this.editJobId).subscribe((resp) => {
    //     this.jobForm.controls['jid'].setValue(resp[0].jid);
    //     this.jobForm.controls['jcname'].setValue(resp[0].jcname);
    //     this.jobForm.controls['jrole'].setValue(resp[0].jrole);
    //     this.jobForm.controls['jskill'].setValue(resp[0].jskill);
    //     this.jobForm.controls['jtype'].setValue(resp[0].jtype);
    //     this.jobForm.controls['jexp'].setValue(resp[0].jexp);
        
    //   });
    // }

  }
  // createForm(){
  //   this.jobForm = this.fb.group({
  //     jid: [''],
  //     jcname: [''],
  //     jrole: [],
  //     jskill: [],
  //     jtype: [],
  //     jexp: []
  //   })
  // }
  // saveJob(){
  //   let jObject: Job = new Job();
  //   jObject.jid = this.jobForm.controls['jid'].value;
  //   jObject.jcname = this.jobForm.controls['jcname'].value;
  //   jObject.jrole = this.jobForm.controls['jrole'].value;
  //   jObject.jskill = this.jobForm.controls['jskill'].value;
  //   jObject.jtype = this.jobForm.controls['jtype'].value;
  //   jObject.jexp = this.jobForm.controls['jexp'].value;
  //   if (this.editJobId) {
  //     this.jobService.updateJob(jObject).subscribe((resp) => {
  //       if (resp) {
  //         alert('Updated Successfully');
  //       }
  //     })
  //   } else {
  //     this.jobService.addJob(jObject).subscribe((resp) => {
  //       if (resp.message == 'Saved successfully') {
  //         alert('Movie saved successfully..')
  //         this.jobForm.reset();
  //       }
  //     })
  //   }
  // }
  // clearForm() {
  //   this.jobForm.reset();
  // }

}
