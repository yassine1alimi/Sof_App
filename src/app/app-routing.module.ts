import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeComponent } from './components/admin-components/add-employe/add-employe.component';
//import { LoginComponent } from './login/login.component';
import { InfoReclamationClientComponent } from './components/client-components/info-reclamation-client/info-reclamation-client.component';
//import { DemandeCongeComponent } from './components/employe-components/demande-conge/demande-conge.component';
import { DemandeRequestEmployeComponent } from './components/employe-components/demande-request-employe/demande-request-employe.component';

import { ListEmployesComponent } from './components/admin-components/list-employes/list-employes.component';
import { TodoListComponent } from './components/admin-components/todos/todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileEmployeComponent } from './components/admin-components/profile-employe/profile-employe.component';
import { NotesInternesComponent } from './components/admin-components/notes/notes-internes/notes-internes.component';
//import { RecrutementsComponent } from './components/admin-components/recrutements/recrutements.component';

//import { CaisseComponent } from './components/admin-components/caisse/caisse.component';
import { TimetrackingComponent } from './components/employe-components/timetracking/timetracking.component';
import { ListMeetingComponent } from './components/admin-components/meetings/list-meeting/list-meeting.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//import { ListCongesComponent } from './components/admin-components/conges/list-conges/list-conges.component';
import { ListDemandesComponent } from './components/admin-components/demandes/list-demandes/list-demandes.component';

import { PresenceCalendarComponent } from './components/employe-components/presence-calendar/presence-calendar.component';
import { HolidayCalendarComponent } from './components/admin-components/holiday-calendar/holiday-calendar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';

import { NotesInternesEmployeComponent } from './components/employe-components/notes-internes-employe/notes-internes-employe.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoEmployeComponent } from './components/employe-components/info-employe/info-employe.component';
import { ProfilClientComponent } from './components/admin-components/profil-client/profil-client.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { PresenceAdminComponent } from './components/admin-components/presence/presence-admin/presence-admin.component';
import { UpdateEmployeComponent } from './components/admin-components/update-employe/update-employe.component';
import { UpdateInfoEmployeComponent } from './components/employe-components/update-info-employe/update-info-employe.component';
import { UpdateMeetingComponent } from './components/admin-components/meetings/update-meeting/update-meeting.component';
import { UpdateNoteComponent } from './components/admin-components/notes/update-note/update-note.component';
import { UpdateTodoComponent } from './components/admin-components/todos/update-todo/update-todo.component';
import { DemandeRequestComponent } from './components/admin-components/demandes/demande-request/demande-request.component';

import { DemandeEmployeComponent } from './components/employe-components/demande-employe/demande-employe.component';

import { UpdatePhotoComponent } from './components/admin-components/update-photo/update-photo.component';
import { BilanDemandesComponent } from './components/admin-components/demandes/bilan-demandes/bilan-demandes.component';

import { ResponseComponent } from './components/client-components/response/response.component';
import { UpdateProfilComponent } from './components/update-profil/update-profil.component';
import { ArchivedEmployesComponent } from './components/admin-components/archived-employes/archived-employes.component';

import{ListReclamationsComponent} from './components/admin-components/list-reclamations/list-reclamations.component'
import { ListGroupeComponent } from './components/admin-components/groupe/list-groupe/list-groupe.component';
import { ListDepartementComponent } from './components/admin-components/groupe/list-departement/list-departement.component';
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
import { MeetingsEmployeComponent } from './components/employe-components/meetings-employe/meetings-employe.component';
import { NotesFaqsComponent } from './components/admin-components/faqs/notes-faqs/notes-faqs.component';
import { UpdateFaqComponent } from './components/admin-components/faqs/update-faq/update-faq.component';
import { FaqClientComponent } from './components/client-components/faq-client/faq-client.component';

//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', component : PublicLayoutComponent, children: [
      
      {path: '',redirectTo: 'home', pathMatch: 'full'},
      { path: 'home',component: HomeComponent},
      { path: 'requestclient', component: InfoReclamationClientComponent },
      { path: 'response', component: ResponseComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },

    ]
  },
  

  { path: '', component: SidebarComponent,children:[

  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path:'dashboard', component: DashboardComponent},
  {path:'profil', component: UpdateProfilComponent},
  { path: 'addEmploye', component: AddEmployeComponent },
    { path: 'ajouter_demande', component: DemandeRequestEmployeComponent },
   { path: 'ajouter_claim', component: ClaimRequestClientComponent }, 
 

  
  { path: 'listEmployes', component: ListEmployesComponent },
  { path: 'archivedEmployes', component: ArchivedEmployesComponent },
  { path: 'todoList', component: TodoListComponent },
  //{ path: 'listEmployes/profilEmploye/:idUser', component: ProfileEmployeComponent },
  { path: 'profilEmploye/:id', component: ProfileEmployeComponent },
  { path: 'updateEmploye', component: UpdateEmployeComponent },
  { path: 'updatePhoto', component: UpdatePhotoComponent },
  { path: 'updateInfoEmploye', component: UpdateInfoEmployeComponent },
  { path: 'updateMeeting', component: UpdateMeetingComponent },
  { path: 'updateNote', component: UpdateNoteComponent },
  { path: 'updateFaq', component: UpdateFaqComponent },

  { path: 'updateTodo', component: UpdateTodoComponent },
  { path: 'profilClient/:id', component: ProfilClientComponent },
   { path: 'demandeRequest/:id', component: DemandeRequestComponent },
   { path: 'claimRequest/:id', component: CalimRequestComponent },

   { path: 'demandeReclamation/:id', component: ReclamationRequestComponent },

  { path: 'info-employe/:id', component: InfoEmployeComponent },
  
  { path: 'bilan-demandes', component: BilanDemandesComponent },
  {path:'addtimesheet/:idReclamation',component:AddTimesheetComponent},

  { path: 'notesInternes', component: NotesInternesComponent },
  { path: 'notesFaqs', component: NotesFaqsComponent },

  { path: 'employe-notesInternes', component: NotesInternesEmployeComponent },
    { path: 'history_requests', component: DemandeEmployeComponent },
    { path: 'history_claims', component: ClaimClientComponent },


  { path: 'list-reclamations', component: ListReclamationsComponent },

 // { path: 'caisse', component: CaisseComponent },
  { path: 'timetracking', component: TimetrackingComponent },
  { path: 'meetings', component: ListMeetingComponent },
  
  { path: 'employe-meetings', component: MeetingsEmployeComponent },

  { path: 'list-requests', component: ListDemandesComponent },
  { path: 'list-claims' , component: ListClaimsComponent},

  { path: 'presence-calendar/:id', component: PresenceCalendarComponent },
  { path: 'presence', component: PresenceAdminComponent },
  { path: 'holiday-calendar', component: HolidayCalendarComponent }]},
  
  { path: 'groupeList', component: ListGroupeComponent },
  { path: 'departementList', component: ListDepartementComponent },
  { path: 'DepartementsAndGroups', component: DepartementsGroupsComponent },
  { path: 'addreclamationcLIENT', component: AddReclamationComponent },
  { path: 'list-reclamations1', component: ListReclamations1Component },

  
  {path:"forum/chat",component:ChatComponent},
  {path:"forum",component:ForumComponent},

 {path:"faq-client",component:FaqClientComponent},
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
