class Api::UsersController < ApplicationController
  def create
      
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render "api/users/show"
    else
      puts @user.errors
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

    if @user.update(user_params)
      render :show
    else
      render json: ["Could not update user"], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :username, :photo)
  end
end #! end of code
