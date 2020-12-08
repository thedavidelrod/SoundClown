class Api::SessionsController < ApplicationController
def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )



    def destroy
  @user = current_user
  if @user
    logout
    render "api/users/show"
  else
    render json: ["Invalid username and/or password"], status: 404
  end
end
end
