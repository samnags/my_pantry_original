Rails.application.routes.draw do

  # post '/login', to: "sessions#create"
  
  # scope :api do
  #   resources :pantry
  # end

  resources :users
end
