class PantriesController < ApplicationController

  def index
    pantries = current_user.pantries
    render json: pantries
  end

  def create
    pantry = Pantry.new(pantry_params)
    pantry.user = current_user
    if pantry.save
      render json: { pantry: pantry}
    else
      render status: 404, json: {error: pantry.errors.full_messages}
    end
  end

  def show
    render json: Pantry.find(params[:id])
  end

  def pantry_ingredients
    pantry = Pantry.find(params[:id])
    pi = pantry.ingredients    
    render json: pi
  end

  private

  def pantry_params
    params.require(:pantry).permit(:location)
  end

end
