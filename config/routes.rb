Rails.application.routes.draw do
  resources :enrolls
  resources :courses
  resources :students


  root 'courses#index'
  get '/histo', :to => 'application#histo'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
