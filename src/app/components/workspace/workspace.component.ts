import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Angular2TokenService } from 'angular2-token'
import { NotificationsService } from 'angular2-notifications'

@Component({
  selector:    'app-workspace',
  templateUrl: './workspace.html'
})

export class WorkspaceComponent implements OnInit {
  @Output() workspaceChange = new EventEmitter()

  workspaces = []
  user = {}

  _workspaceSelectData: any = {}
  _workspaceCreateData = {}

  constructor(
    public  _tokenService:  Angular2TokenService,
    private _notifyService: NotificationsService
  ){ }

  ngOnInit() {
    this._tokenService.get('workspaces')
      .subscribe(res => { this.workspaces = res.json()
        if (localStorage.getItem('currentWorkspaceId')) {
          this._workspaceSelectData.id = parseInt(localStorage.getItem('currentWorkspaceId'))
        } else {
          this._workspaceSelectData = this.workspaces[0]
        }
      })
  }

  onSelect() {
    if (this._workspaceSelectData) {
      let prevWorkspaceId = localStorage.getItem('currentWorkspaceId')
      let params: {} = { 'session': { 'id': this._workspaceSelectData.id, 'type': 'workspace' } };

      localStorage.setItem('currentWorkspaceId', this._workspaceSelectData.id)
      this._tokenService.post('sessions', params)
        .subscribe(res => {
          if (prevWorkspaceId != this._workspaceSelectData.id) {
            this.workspaceChange.emit(null)
          }
        })
    }
  }

  onCreate() {
    this._tokenService.post('workspaces', this._workspaceCreateData)
      .subscribe(res => { this.workspaces.push(res.json())},
                 err => { this._notifyService.error(err.statusText, err._body) }
      )
  }
}
