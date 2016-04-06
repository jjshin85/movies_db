Rails.application.routes.draw do

  root 'welcome#index'
  resources :users
  resources :movies
  resources :libraries

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end