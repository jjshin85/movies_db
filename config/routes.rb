Rails.application.routes.draw do

  root 'welcome#index'
  resources :movies

  resources :users do
    resources :libraries
  end

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end