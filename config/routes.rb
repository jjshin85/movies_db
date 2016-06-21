Rails.application.routes.draw do

  root 'welcome#index'
  resources :movies, only: [:index, :show] do
    resources :cast, only: :index
    resources :crew, only: :index
  end

end
