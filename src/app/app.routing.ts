import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent }  from './project-list/project-list.component';
import { AddProjectComponent } from  './add-project/add-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'addproject',
    component: AddProjectComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
