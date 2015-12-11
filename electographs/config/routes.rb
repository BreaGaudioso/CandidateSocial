Rails.application.routes.draw do
  root to: 'statics#index'

  scope '/api' do
    resources :candidates do
      resources :tweets
    end
  end
end

