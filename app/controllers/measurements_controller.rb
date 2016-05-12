class MeasurementsController < ApplicationController
  def fetch_measurement_data
    @measurements = Measurement.all

    respond_to do |format|
      format.json {render json: @measurements}
    end
  end

  def fetch_average_measurement_data
    @hourly_averages = Hourly_Average.all

    respond_to do |format|
      format.json {render json: @hourly_averages}
    end
  end
end
