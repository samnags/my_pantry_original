class PantryingredientsController < ApplicationController

  def create
    ing = PantryIngredient.new
    ing.pantry = current_pantry
    ing.quantity = quantity_params
    ing.measurement_id = measurement_params.id
    ing.ingredient = ingredient_params

    if ing.save
      render json:
      {
        ingredient: ing.ingredient.name,
        quantity: ing.quantity,
        measurement: Measurement.find(ing.measurement_id).name,
        category: ing.ingredient.category.name,
        currentpantry: ing.pantry
      }
    else
      render status: 404, json: {error: ing.errors.full_messages}
    end
  end


  def update
    ing = PantryIngredient.find(params[:pantryingredient][:id])
    ing.quantity = quantity_params
    ing.measurement_id = measurement_params.id
    ing.ingredient = ingredient_params

    if ing.save
      render json:
      {
        ingredient: ing.ingredient.name,
        quantity: ing.quantity,
        measurement: Measurement.find(ing.measurement_id).name,
        category: ing.ingredient.category.name,
        currentpantry: ing.pantry
      }
    else
      render status: 404, json: {error: ing.errors.full_messages}
    end

  end

  def destroy    
    ing = PantryIngredient.find(params[:id])
    ing.delete
    render json: { success: 'true' }
  end

  def find
    pantry_id = Pantry.find(params[:pantry])
    ingredient_id = Ingredient.find_by(name: params[:ingredient])
    pi = PantryIngredient.find_by_pantry_id_and_ingredient_id(pantry_id, ingredient_id)
    render json:
        { pi: pi,
          ingredient: pi.ingredient.name,
          quantity: pi.quantity,
          measurement: pi.measurement.name,
          category: pi.category.name,
          currentpantry: pi.pantry
      }
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
      ingredient = Ingredient.find_or_create_by(name: params[:pantryingredient][:ingredient])
      ingredient.category = Category.find_by(name: params[:pantryingredient][:category])
      ingredient.save
      return ingredient
    end


end
