class Api::SessionsController < ApplicationController
def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user 
      log_in!(@user)
    end

end


    def destroy
  @user = current_user
  if @user
    log_out!
    render "api/users/show"
  else
    render json: ["Enter a valid email address or profile url."], status: 404
  end
end

end #! end of code
