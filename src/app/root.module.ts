import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './root.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthModule} from './auth/auth.module';
import { PostComponent } from './post/post.component';
import {MaterialModule} from "./shared/material.module";
import {UserModule} from "./user/user.module";
import {TimeAgoPipe} from 'time-ago-pipe';
import {AvatarModule} from "ngx-avatar";
import { PeopleComponent } from './people/people.component';
import { FindPeopleComponent } from './people/find-people/find-people.component';
import { FollowersComponent } from './people/followers/followers.component';
import { FollowingComponent } from './people/following/following.component';
import {PostModule} from "./post/post.module";
import { ProfileComponent } from './profile/profile.component';
import {ImageCropperComponent, ImageCropperModule} from 'ng2-img-cropper';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SinglePostComponent } from './single-post/single-post.component';
import {AppsModule} from "./apps/apps.module";
import {AppsComponent} from "./apps/apps.component";
import {ShowAppDialogComponent} from './apps/show-app-dialog/show-app-dialog.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {ImageUploadService} from './image-upload/image-upload.service';
import {SingleAppComponent} from "./apps/single-app/single-app.component";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor';
import {NgxPermissionsModule} from 'ngx-permissions';

const appRoutes: Routes = [
  { path: '', component: RootComponent, canActivate: [AuthGuard] ,children: [
    {path: '', redirectTo: 'post', pathMatch: 'full'},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'post/:id', component: SinglePostComponent },
  { path: 'edit', component: EditUserComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'people', component: PeopleComponent, children: [
    {path: '', redirectTo: 'find', pathMatch: 'full'},
    {path: 'find', component: FindPeopleComponent},
    {path: 'followers', component: FollowersComponent},
    {path: 'following', component: FollowingComponent}
  ]},
  { path: 'apps', component: AppsComponent}, {path: 'apps/:id', component: SingleAppComponent}]}
  ];

@NgModule({
  declarations: [
    RootComponent,
    WelcomeComponent,
    RegisterComponent,
    PostComponent,
    TimeAgoPipe,
    PeopleComponent,
    FindPeopleComponent,
    FollowersComponent,
    FollowingComponent,
    ProfileComponent,
    EditUserComponent,
    SinglePostComponent,
    ShowAppDialogComponent,
    ImageUploadComponent,
    SingleAppComponent
  ],
  entryComponents: [ImageUploadComponent],
  imports: [
    AppsModule,
    ImageCropperModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: 'ngn', api_key: '295533173244583', api_secret: 'xiGfbeV5PXiYqKzB9VyOBfEYP6w'}),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(
      appRoutes
    ),
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule,
    UserModule,
    PostModule,
    AvatarModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [ImageUploadService, HttpClient, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }]
})

export class RootModule { }
