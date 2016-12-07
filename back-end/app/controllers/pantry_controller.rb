class PantryController < ApplicationController

  def index
    render json: Pantry.all
  end

  def show
    render json: Pantry.find(params[:id])
  end
end
