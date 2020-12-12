Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create, :update]
    resource :session, only: [:create, :destroy]
    resources :sounds, only: [:index, :show, :create, :update, :destroy]
  end

root "static_pages#root"
end #! end of code
