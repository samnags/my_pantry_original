Rails.application.routes.draw do

  post '/login', to: "sessions#create"
  resources :users
  resources :pantries, only: [:index, :create, :show]
  resources :pantryingredients, only: [:create, :show]
  resources :categories, only: [:index]
end
