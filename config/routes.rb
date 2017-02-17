Rails.application.routes.draw do
  scope 'api' do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'

      resources :workspaces,       only: [:index, :create]
      resources :counterparties,   only: [:index, :create]
      resource  :sessions,         only: [:create, :destroy]
    end
  end
end
