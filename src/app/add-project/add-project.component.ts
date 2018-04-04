import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitProject(projectName: string, managers: string, description: string, goal: string, use: string, rewards: string) {
    const newProject = new Project(projectName, managers, goal, use, description, rewards);
    this.projectService.addProject(newProject);
  }

}
