class V1::BaseController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Helpers

  def current_workspace
    if session[:workspace]
      current_workspace ||= Workspace.find(session[:workspace]) if session[:workspace]
    else
      current_workspace ||= current_v1_user.workspaces.find_by(title: 'Default')
    end
  end
  helper_method :current_workspace

end
