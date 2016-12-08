class UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    jwt = Auth.issue({user_id: user.id})
    render json: {jwt: jwt}
  end

  def index    
    users = User.all
    render json: {users: users}

  end
end
