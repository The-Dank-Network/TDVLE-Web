import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarModule } from "@lucasolivamorim/ngx-avatar";
import {MaterialModule} from "../shared/material.module";
import {RouterModule} from "@angular/router";
import {ClassesComponent} from './classes.component';
import {ShowCreateClassDialogComponent} from './show-create-class-dialog/show-create-class-dialog.component';
import {ClassService} from './class.service';
import {ShowEnterClassDialogComponent} from './show-enter-class-dialog/show-enter-class-dialog.component';
import {ClassActivityComponent} from "./class-activity/class-activity.component";
import {ClassStreamComponent} from "./class-stream/class-stream.component";
import {NgMasonryGridModule} from "@lucasolivamorim/ng-masonry-grid";
import {Nl2BrPipeModule} from "@lucasolivamorim/nl2br-pipe";
import {LinkyModule} from "angular-linky";
import {CreateActivityComponent} from "./create-activity/create-activity.component";
import {FormsModule} from "@angular/forms";
import { ShowCreateStreamItemDialogComponent } from './class-stream/show-create-stream-item-dialog/show-create-stream-item-dialog.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { ShowCreateProblemDialogComponent } from './create-quiz/show-create-problem-dialog/show-create-problem-dialog.component';

@NgModule({
  declarations: [ClassesComponent,
  ClassActivityComponent,
  ClassStreamComponent,
  CreateActivityComponent, ShowCreateStreamItemDialogComponent, CreateQuizComponent, ShowCreateProblemDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    AvatarModule,
    MaterialModule,
    RouterModule,
    NgMasonryGridModule,
    Nl2BrPipeModule,
    LinkyModule
  ],
  entryComponents: [ShowCreateClassDialogComponent, ShowEnterClassDialogComponent, ShowCreateStreamItemDialogComponent],
  providers: [ClassService],
  exports: [ClassesComponent,
    ClassActivityComponent,
    ClassStreamComponent,
    CreateActivityComponent,
    CreateQuizComponent]
})
export class ClassesModule { }
