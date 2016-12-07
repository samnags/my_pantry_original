Rails.application.routes.draw do
  scope :api do
    resources :pantry
  end
end
