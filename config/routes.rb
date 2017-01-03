Rails.application.routes.draw do

  post '/login', to: "sessions#create"

  get '/pantries/:id/ingredients', to: "pantries#pantry_ingredients"
  get '/pantryingredients/find', to: "pantryingredients#find", as: 'find'

  resources :users
  resources :pantries, only: [:index, :create, :show]
  resources :pantryingredients, except: [:index], as: 'pi'
  resources :categories, only: [:index]
  resources :measurements, only: [:index]
end
