Rails.application.routes.draw do

  root 'pages#home'

  get '/measurements/data' => 'measurements#fetch_measurement_data'

  get '/audios/whitenoise' => 'audios#whitenoise'

  # get '/pages/DIY' => 'pages#....'

end
