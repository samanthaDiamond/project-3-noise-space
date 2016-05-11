Rails.application.routes.draw do

  root 'pages#home'

  get '/measurements/data' => 'measurements#fetch_measurement_data'

  get '/measurements/avg_data' => 'measurements#fetch_average_measurement_data'

  get '/pages/DIY' => 'pages#DIY'

  get '/pages/data_visualisations' => 'pages#data_visualisations'

end
