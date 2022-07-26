import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmprofileComponent } from './admprofile/admprofile.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SdashboardComponent } from './profile/sdashboard/sdashboard.component';
import { SprofileComponent } from './profile/sprofile/sprofile.component';
import { TrnprofileComponent } from './trnprofile/trnprofile.component';
import { AdmtrnsecComponent } from './admprofile/admtrnsec/admtrnsec.component';
import { AdmstdsecComponent } from './admprofile/admstdsec/admstdsec.component';
import { AdmcrssecComponent } from './admprofile/admcrssec/admcrssec.component';
import { SexamsComponent } from './profile/sexams/sexams.component';
import { SfeedbacksComponent } from './profile/sfeedbacks/sfeedbacks.component';
import { SassignmentsComponent } from './profile/sassignments/sassignments.component';
import { TstudentComponent } from './trnprofile/tstudent/tstudent.component';
import { AddCourseComponent } from './admprofile/admcrssec/add-course/add-course.component';
import { AddstudentComponent } from './admprofile/admstdsec/addstudent/addstudent.component';
import { AddtrainerComponent } from './admprofile/admtrnsec/addtrainer/addtrainer.component';
import { ScoursesComponent } from './profile/scourses/scourses.component';
import { TprofileComponent } from './trnprofile/tprofile/tprofile.component';
import { AprofileComponent } from './admprofile/aprofile/aprofile.component';
import { TcontentComponent } from './trnprofile/tcontent/tcontent.component';
import { TfeedbackComponent } from './trnprofile/tfeedback/tfeedback.component';
import { AssignmentComponent } from './trnprofile/assignment/assignment.component';
import { ExamComponent } from './profile/sexams/exam/exam.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignUpComponent},
{path:'profile',canActivate:[AuthGuard],component:ProfileComponent, 
children:[
  {path:'sdashboard',component:SdashboardComponent},
  {path:'sdashboard/scourses',component:ScoursesComponent},
  {path:'sdashboard/sprofile',component:SprofileComponent},
  {path:'sprofile',component:SprofileComponent},
  {path:'sprofile/scourses', component:ScoursesComponent},
  {path:'sexams',component:SexamsComponent},
  {path:'sfeedbacks',component:SfeedbacksComponent},
  {path:'sdashboard/sfeedbacks',component:SfeedbacksComponent},
  {path:'sassignments',component:SassignmentsComponent},
]},
{path:'admprofile',canActivate:[AuthGuard],component:AdmprofileComponent,
children:[
  {path:'admtrnsec',component:AdmtrnsecComponent},
  {path:'admstdsec',component:AdmstdsecComponent},
  {path:'admcrssec',component:AdmcrssecComponent},
  {path:'aprofile',component:AprofileComponent}
]},
{path:'trnprofile',canActivate:[AuthGuard],component:TrnprofileComponent,
children:[
  {path:'tassignments',component:AssignmentComponent},
  {path:'tstudent',component:TstudentComponent},
  {path:'tprofile',component:TprofileComponent},
  {path:'tcontent',component:TcontentComponent},
  {path:'tfeedback',component:TfeedbackComponent}
]},
{path:'addCourse',component:AddCourseComponent},
{path:'edit/:id',component:AddCourseComponent},
{path:'addstudent',component:AddstudentComponent},
{path:'addtrainer',component:AddtrainerComponent},
{path:'exam',component:ExamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
