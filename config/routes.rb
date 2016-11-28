Rails.application.routes.draw do

  resources :products
  get 'react-products', to: 'product_table#index'
  get 'hello', to: 'hello_world#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
