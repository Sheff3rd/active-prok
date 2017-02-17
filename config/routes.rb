Rails.application.routes.draw do
  scope 'api' do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'

      resources :workspaces,       only: [:index, :create, :update]
    end
  end
end
