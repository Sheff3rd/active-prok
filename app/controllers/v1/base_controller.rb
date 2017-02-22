class V1::BaseController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Helpers

  def current_workspace
    current_workspace ||= Workspace.find(session[:workspace])
  end
  helper_method :current_workspace
end
