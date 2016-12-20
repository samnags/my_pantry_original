class CategoriesController < ApplicationController

  def index
    categories = Category.order(:name)
    render json: { categories: categories }
  end

end
