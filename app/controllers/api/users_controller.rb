class Api::UsersController < ApplicationController
def create
    @user = User.new(user_params)

    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
@user = User.find_by(id: params[:id])
render :show
end

  def index 
    @users = User.all 
    render :index
  end

  def update 
    @user = User.find_by(id: params[:id])
    
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end#! end of code