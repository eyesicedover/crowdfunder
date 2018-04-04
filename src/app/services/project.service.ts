import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string){
    return this.database.object('projects/' + projectId);
  }

}
