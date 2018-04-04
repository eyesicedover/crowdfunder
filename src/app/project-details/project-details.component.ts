import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../models/project.model';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay: Project;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });

    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
     this.projectToDisplay = new Project(dataLastEmittedFromObserver.projectName,
                                   dataLastEmittedFromObserver.managers, dataLastEmittedFromObserver.fundingGoal, dataLastEmittedFromObserver.fundingUse, dataLastEmittedFromObserver.description, dataLastEmittedFromObserver.rewards);
     this.projectToDisplay.currentFunding = dataLastEmittedFromObserver.currentFunding;
   });
  }
}
