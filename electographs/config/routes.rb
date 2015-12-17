Rails.application.routes.draw do
  root to: 'statics#index'

  scope '/api' do
    resources :candidates
    resources :tweets
  end
end

