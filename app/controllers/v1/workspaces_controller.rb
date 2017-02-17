class V1::WorkspacesController < V1::BaseController
  before_action :authenticate_v1_user!

  def index
    workspaces = Workspace.where(user_id: current_v1_user)
    render json: workspaces
  end

  def create
    workspace = current_v1_user.workspaces.create(title: params[:title])
    if workspace.save
      render json: workspace, status: :created
    else
      render json: workspace.errors.full_messages.first, status: 422
    end
  end
end
