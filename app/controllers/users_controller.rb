class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :show]

  def show
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end


  def create
    user = User.new(user_params)
    # byebug
    if user.save
      byebug
    else
      byebug
    end
  end



  def index    
    users = User.all
    render json: {users: users}
  end

  private
    def user_params
      params.require(:user).permit(:email, :password)
    end

end
