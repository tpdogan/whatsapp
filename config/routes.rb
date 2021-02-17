Rails.application.routes.draw do
  get 'hangouts/index'
  devise_for :users
  root to: 'hangouts#index'
end
