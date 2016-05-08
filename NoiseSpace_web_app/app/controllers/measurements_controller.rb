class MeasurementsController < ApplicationController
  def fetch_measurement_data
    @measurements = Measurement.all

    respond_to do |format|
      format.json {render json: @measurements}
    end
  end

  def add_measurement
    # This is a post action
    # tessel sends measurement json data to this web app using ajax
    # add data to measurements database
    # update average of all hourly average measurements
  end
end
