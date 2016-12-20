Rails.application.routes.draw do

  post '/login', to: "sessions#create"
  resources :users
  resources :pantries
  resources :pantryingredients

end
