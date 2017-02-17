import { Component, OnInit } from '@angular/core'
import { Workspace } from '../../models/workspace'
import { Angular2TokenService } from 'angular2-token'
import { NotificationsService } from 'angular2-notifications'

@Component({
  selector:    'app-workspace',
  templateUrl: './workspace.html'
})

export class WorkspaceComponent implements OnInit {
  workspaces: Workspace[]
  user = {}

  currentWorkspaceId = localStorage.getItem('current_workspace')
  _workspaceSelectDataId = new Workspace('Default')
  _workspaceCreateData = {}

  constructor(
    public  _tokenService:  Angular2TokenService,
    private _notifyService: NotificationsService
  ){ }

  ngOnInit() {
    this._tokenService.get('workspaces')
      .subscribe(res => { this.workspaces = res.json()
      })
  }

  onSelect() {
    if (this._workspaceSelectDataId) {
      localStorage.setItem('current_workspace', `${this._workspaceSelectDataId}`)
    }
  }

  onCreate() {
    this._tokenService.post('workspaces', this._workspaceCreateData)
      .subscribe(res => { this.workspaces.push(res.json())},
                 err => { this._notifyService.error(err.statusText, err._body) }
      )
  }
}
