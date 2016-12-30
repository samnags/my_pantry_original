class MeasurementsController < ApplicationController

  def index    
    measurements = Measurement.order(:name)
    render json: { measurements: measurements }
  end

end
