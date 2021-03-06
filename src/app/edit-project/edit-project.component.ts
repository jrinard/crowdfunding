import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
    @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingThisProject(projectToBeChanged){
    this.projectService.updateProject(projectToBeChanged);
  }

  beginDeletingProject(projectToBeDeleted){
    if (confirm("Are You Sure You Want to delete THIS project permanently??")){
      this.projectService.deleteProject(projectToBeDeleted);
    }
  }

}
