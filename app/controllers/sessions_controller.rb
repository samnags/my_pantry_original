class SessionsController < ApplicationController
  skip_before_action :authenticate_user

  def create
    user = User.find_by(email: auth_params[:email])

    if !!user && user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.email})
      render json: {jwt: jwt}
    else
      render json: {error: 'Invalid login'}
    end
  end


   private
    def auth_params
      params.require(:user).permit(:email, :password)
    end


end
