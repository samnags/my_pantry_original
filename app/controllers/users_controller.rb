class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: [:create, :new]

  def create
    user = User.new(user_params)
    if user.save
      jwt = Auth.issue({user: user.email})
      render json: {jwt: jwt, user: user}
    else
      render json: { error: user.errors }
    end
  end

  def show    
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def index
    users = User.all
    render json: {users: users}
  end

  private

    def user_params
      params.require(:user).permit(:name, :email, :password)
    end

end
