Rails.application.routes.draw do
  scope '/api' do
    resources :candidates do
      resources :tweets
    end
  end
end

