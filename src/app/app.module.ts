import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService } from './services/employe.service';
//import { InfoCandidateComponent } from './components/candidate-components/info-candidate/info-candidate.component';
import { CandidateService } from './services/candidate.service';
import { ReactiveFormsModule} from '@angular/forms';
import { DemandeDocComponent } from './components/employe-components/demande-doc/demande-doc.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { CommonModule } from '@angular/common';

import { FlatpickrModule } from 'angularx-flatpickr';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalModule } from 'ngx-bootstrap/modal';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination' ; 

import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { TodoListComponent } from './components/admin-components/todos/todo-list/todo-list.component';
import { MatDialogModule, } from '@angular/material/dialog';
import { TodoService } from './services/todo.service';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';


//import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
import { EmailService } from './services/email.service';
import { MatIconModule, MatButtonModule, MatInputModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatSnackBarModule } from '@angular/material';
//import { CaisseComponent } from './components/admin-components/caisse/caisse.component';
import { AjoutNoteComponent } from './components/admin-components/notes/ajout-note/ajout-note.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { AddPresenceComponent } from './components/employe-components/add-presence/add-presence.component';
import { AddTodoComponent } from './components/admin-components/todos/add-todo/add-todo.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { MeetingComponent } from './components/admin-components/meetings/meeting/meeting.component';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AcceptComponent } from './components/admin-components/dialogs/accept/accept.component';
import { PresenceCalendarComponent } from './components/employe-components/presence-calendar/presence-calendar.component';
import { HolidayCalendarComponent } from './components/admin-components/holiday-calendar/holiday-calendar.component';
import { HomeComponent } from './components/home/home.component';

import { FooterComponent } from './components/footer/footer.component';
import { NotesInternesEmployeComponent } from './components/employe-components/notes-internes-employe/notes-internes-employe.component';
import {InfoEmployeComponent} from './components/employe-components/info-employe/info-employe.component';
import { ProfilCandidatComponent } from './components/admin-components/profil-candidat/profil-candidat.component';
import {AccumulationChartModule} from '@syncfusion/ej2-angular-charts';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';

import {  MatDividerModule} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PieComponent } from './shared/widgets/pie/pie.component';
import { LineComponent } from './shared/widgets/line/line.component';
import { Pie2Component } from './shared/widgets/pie2/pie2.component';
import { PresenceAdminComponent } from './components/admin-components/presence/presence-admin/presence-admin.component';
import { UpdateInfoEmployeComponent } from './components/employe-components/update-info-employe/update-info-employe.component';
import { UpdateMeetingComponent } from './components/admin-components/meetings/update-meeting/update-meeting.component';
import { UpdateNoteComponent } from './components/admin-components/notes/update-note/update-note.component';
import { UpdateTodoComponent } from './components/admin-components/todos/update-todo/update-todo.component';
import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { ResponseComponent } from './components/client-components/response/response.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { ArchivedEmployesComponent } from './components/admin-components/archived-employes/archived-employes.component';
import {EditorModule} from '@tinymce/tinymce-angular';


import {    MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BilanDemandesComponent } from './components/admin-components/demandes/bilan-demandes/bilan-demandes.component';
import { DemandeRequestComponent } from './components/admin-components/demandes/demande-request/demande-request.component';
import { ListDemandesComponent } from './components/admin-components/demandes/list-demandes/list-demandes.component';
import { DemandeEmployeComponent } from './components/employe-components/demande-employe/demande-employe.component';
import { DemandeRequestEmployeComponent } from './components/employe-components/demande-request-employe/demande-request-employe.component';
import { InfoReclamationClientComponent } from './components/client-components/info-reclamation-client/info-reclamation-client.component';
import { ProfilClientComponent } from './components/admin-components/profil-client/profil-client.component';
import { ListReclamationsComponent } from './components/admin-components/list-reclamations/list-reclamations.component';
import { AddGroupeComponent } from './components/admin-components/groupe/add-groupe/add-groupe.component';
import { AffecterGroupeADepartementComponent } from './components/admin-components/groupe/affecter-groupe-adepartement/affecter-groupe-adepartement.component';
import { ListGroupeComponent } from './components/admin-components/groupe/list-groupe/list-groupe.component';
import { AjouterDepartementComponent } from './components/admin-components/groupe/ajouter-departement/ajouter-departement.component';
import { GroupeService } from './services/groupe.service';
import { ListDepartementComponent } from './components/admin-components/groupe/list-departement/list-departement.component';
import { DepartementService } from './services/departement.service';
import { AddReclamationComponent } from './components/client-components/add-reclamation/add-reclamation.component';
import { ListReclamations1Component } from './components/admin-components/reclamations/list-reclamations1/list-reclamations1.component';
import { ReclamationRequestComponent } from './components/admin-components/reclamations/reclamation-request/reclamation-request.component';
import { ClaimClientComponent } from './components/client-components/claim-client/claim-client.component';
import { ClaimRequestClientComponent } from './components/client-components/claim-request-client/claim-request-client.component';
import { ListClaimsComponent } from './components/admin-components/claims/list-claims/list-claims.component';
import { CalimRequestComponent } from './components/admin-components/claims/calim-request/calim-request.component';
import { AddTimesheetComponent } from './components/admin-components/add-timesheet/add-timesheet.component';
import { ChatComponent } from './components/forum-components/chat/chat.component';
import { ForumComponent } from './components/forum-components/forum/forum.component';
import { DepartementsGroupsComponent } from './components/admin-components/departements-groups/departements-groups.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AffecterClaimComponent } from './components/admin-components/claims/affecter-claim/affecter-claim.component';
import { ClaimComponent } from './components/admin-components/claims/claim/claim.component';
import { MeetingsEmployeComponent } from './components/employe-components/meetings-employe/meetings-employe.component';
import { AjoutFaqComponent } from './components/admin-components/faqs/ajout-faq/ajout-faq.component';
import { NotesFaqsComponent } from './components/admin-components/faqs/notes-faqs/notes-faqs.component';
import { UpdateFaqComponent } from './components/admin-components/faqs/update-faq/update-faq.component';
import { ShowMessagesComponent } from './components/admin-components/contacts/show-messages/show-messages.component';
import { FaqClientComponent } from './components/client-components/faq-client/faq-client.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddEmployeComponent,
    //InfoCandidateComponent,
    DemandeDocComponent,
    ListEmployesComponent,
    TodoListComponent,
    ProfileEmployeComponent,
    UpdateEmployeComponent,
    
   // RecrutementsComponent,
    NotesInternesComponent,
    AjoutNoteComponent,
   // CaisseComponent,
    TimetrackingComponent,
    AddPresenceComponent,
    AddTodoComponent,
    MeetingComponent,
    ListMeetingComponent,
    LoginComponent,
    RegisterComponent,
    AcceptComponent,
    PresenceCalendarComponent,
    HolidayCalendarComponent,
    HomeComponent,
    FooterComponent,
    NotesInternesEmployeComponent,
    InfoEmployeComponent,
    ProfilCandidatComponent,
    ProfilComponent,
    DashboardComponent,
    PublicLayoutComponent,
    PieComponent,
    LineComponent,
    Pie2Component,
    PresenceAdminComponent,
    UpdateInfoEmployeComponent,
    UpdateMeetingComponent,
    UpdateNoteComponent,
    UpdateTodoComponent,
    UpdatePhotoComponent,
    ResponseComponent,
    UpdateProfilComponent,
    ArchivedEmployesComponent,
    BilanDemandesComponent,
    DemandeRequestComponent,
    ListDemandesComponent,
    DemandeEmployeComponent,
    DemandeRequestEmployeComponent,
    InfoReclamationClientComponent,
    ProfilClientComponent,
    ListReclamationsComponent,
    AddGroupeComponent,
    AffecterGroupeADepartementComponent,
    ListGroupeComponent,
    AjouterDepartementComponent,
    ListDepartementComponent,
    AddReclamationComponent,
    ListReclamations1Component,
    ReclamationRequestComponent,
    ClaimClientComponent,
    ClaimRequestClientComponent,
    ListClaimsComponent,
    CalimRequestComponent,
    AddTimesheetComponent,
    ChatComponent,
    ForumComponent,
    DepartementsGroupsComponent,
    AffecterClaimComponent,
    ClaimComponent,
    MeetingsEmployeComponent,
    AjoutFaqComponent,
    NotesFaqsComponent,
    UpdateFaqComponent,
    ShowMessagesComponent,
    FaqClientComponent,
    
    
   
    //LoginComponent,
    //RegisterComponent,
    //HomeComponent,
 
 
  ],
  imports: [
    MatDialogModule,
    ScheduleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ModalModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    FullCalendarModule,
    AccumulationChartModule,
    HighchartsChartModule,
    MatCardModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    EditorModule,
    MatSnackBarModule,
    MatCarouselModule.forRoot()
  
  ],

  exports: [
    PieComponent
  ],
  providers: [EmployeService,CandidateService,TodoService,EmailService,authInterceptorProviders,GroupeService,DepartementService,  { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent,ListDemandesComponent,ListClaimsComponent],
  entryComponents:[AjoutNoteComponent,AjoutFaqComponent,AddTodoComponent,AddGroupeComponent,AjouterDepartementComponent,MeetingComponent,AcceptComponent,UpdateMeetingComponent,AffecterClaimComponent,ClaimComponent]
})
export class AppModule { }
