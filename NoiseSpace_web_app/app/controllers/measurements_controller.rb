class MeasurementsController < ApplicationController
  def fetch_measurement_data
    @measurements = Measurement.all

    respond_to do |format|
      format.json {render json: @measurements}
    end
  end
end
