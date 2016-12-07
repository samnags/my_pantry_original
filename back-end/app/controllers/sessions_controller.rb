class SessionsController < ApplicationController
  # skip_before_action :authenticate
  def create    
    user = User.find_by(email: auth_params[:email])

    if !!user && user.authenticate(auth_params[:password])
      jwt = Auth.issue({user_id: user.id})
      render json: {jwt: jwt, user_id: user.id, user_email: user.email}
    else
      render json: {error: 'Invalid login'}
    end
  end


   private
    def auth_params
      params.require(:user).permit(:email, :password)
    end


end
