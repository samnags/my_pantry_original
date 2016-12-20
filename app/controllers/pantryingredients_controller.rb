class PantryingredientsController < ApplicationController

  def create
    ing = PantryIngredient.new
    ing.pantry = current_pantry
    ing.quantity = quantity_params
    ing.measurement_id = measurement_params.id
    ing.ingredient = ingredient_params
    ing.save    
  end


  private

    def pantry_params
      params.require(:pantryingredient).permit(:quantity, :measurement, :ingredient)
    end

    def quantity_params
      params[:pantryingredient][:quantity].to_i
    end


    def current_pantry
      Pantry.find(params[:pantryingredient][:currentPantry])
    end

    def measurement_params
      Measurement.find_or_create_by(name: params[:pantryingredient][:measurement])
    end

    def ingredient_params
      Ingredient.find_or_create_by(name: params[:pantryingredient][:ingredient])
    end


end
# (params[:pantryingredient][:currentPantry]
