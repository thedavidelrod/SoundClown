class Api::SoundsController < ApplicationController
  def index
    @sounds = Sound.all
    render :index
  end

  def create
    @sound = Song.new(sound_params)
    if @sound.save
      render :show
    else
      render json: @sound.errors.full_messages, status: 401
    end
  end

  def update
    @sound = Sound.find_by(id: params[:id])
    if @sound.update
        render :show
    end
    else render json: @sound.errors.full_messages, status 401
  end

  def show 
    @sound = Sound.find_by(id: params[:id])
    render :show
  end

  def destroy
    @sound = Sound.find_by(id: params[:id])
    if @sound
        @sound.destroy
        render json: {}
    end
  end

  
  

  
  def sound_params
    params.require(:sounds).permit(:title, :tag, :body)
  end
end #!end of code
