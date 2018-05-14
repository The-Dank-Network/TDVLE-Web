import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Activity} from "../../model/activity.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassService} from "../class.service";
import {Submission} from "../../model/submission.model";
import {BehaviorSubject} from "rxjs/index";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-class-activity',
  templateUrl: './class-activity.component.html',
  styleUrls: ['./class-activity.component.scss']
})
export class ClassActivityComponent implements OnInit {
  activity: Activity;
  submissions: Submission[] = [];
  uploadedSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  submissionCopy: Submission[] = [];

  constructor(private ref: ChangeDetectorRef, private route: ActivatedRoute, private classService: ClassService, private snackBar: MatSnackBar, private router: Router) {
    window['callbackFileUploaded'] = this.uploadedSubject;
    let id = route.snapshot.params['activityId'];
    classService.getActivity(id).subscribe((act: Activity) => {
      this.activity = act;
    });

    classService.getSubmissions(id).subscribe((subs: Submission[]) => {
      this.submissions = subs;
      Object.assign(this.submissionCopy, this.submissions);
    });
  }

  ngOnInit() {
    this.uploadedSubject.subscribe(k => {
      if (!k)
        return;
      this.fileUploadCompleted(k);
    });
  }

  checkDate() {
    if (!this.activity)
      return false;
    return new Date(this.activity.dueDate) > new Date();
  }

  fileUploadCompleted(filedata) {
    let submision = new Submission();
    submision.url = filedata.url;
    submision.fileName = filedata.name;
    submision.fileType = filedata.type;
    this.submissions.push(submision);
    this.ref.detectChanges();
  }

  deleteSubmission(i, $event) {
    this.submissions.splice(i, 1);
    this.ref.detectChanges();
  }

  submit() {
    this.classService.sendSubmission(this.activity.id, this.submissions).subscribe((submissions) => {
      this.snackBar.open('Activity submitted', 'Dismiss', {duration: 2000});
      this.router.navigate(['../../'], {relativeTo: this.route});
    });
  }

}
