class V1::SessionsController < V1::BaseController
  def create
    session[:workspace] = session_params[:id] if session_params[:type] == 'workspace'
    render status: 204
  end

  private

  def session_params
    params.require(:session).permit(:id, :type)
  end
end
