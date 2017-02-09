Rails.application.routes.draw do
  scope 'api' do
    namespace :v1 do
      resource :sessions, only: :create
    end
  end
end
