Rails.application.routes.draw do

  post '/login', to: "sessions#create"

  get '/pantries/:id/ingredients', to: "pantries#pantry_ingredients"

  resources :users
  resources :pantries, only: [:index, :create, :show]
  resources :pantryingredients, only: [:create, :show]
  resources :categories, only: [:index]
end
