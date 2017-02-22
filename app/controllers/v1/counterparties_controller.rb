class V1::CounterpartiesController < V1::BaseController
  before_action :authenticate_v1_user!

  def index
    counterparties = current_workspace.counterparties.all
    render json: counterparties, status: :ok
  end

  def create
    counterparty = Counterparty.create(counterparty_params.merge(workspace_id: current_workspace.id))
    if counterparty.save
      render json: counterparty, status: :created
    else
      render status: 422
    end
  end

  private

  def counterparty_params
    params.require(:counterparty).permit(:name, :date, :party_type)
  end
end
