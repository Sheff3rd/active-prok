class V1::CounterpartiesController < V1::BaseController
  def create
    cp = Counterparty.create(counterparty_params)
    if cp.save
      render json: cp, status: ok
    else
      render status: 422
    end
  end
end
