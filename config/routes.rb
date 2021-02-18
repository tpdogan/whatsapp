Rails.application.routes.draw do
  resources :messages, only: [:create]
  devise_for :users
  root to: 'hangouts#index'
end
