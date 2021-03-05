Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :index] do
      resources :sounds, only: [:index]
      resources :likes, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    
    resources :sounds, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:create, :destroy, :index]
    resources :likes, only: [:create, :destroy]
  end

  root "static_pages#root"
end #! end of code
