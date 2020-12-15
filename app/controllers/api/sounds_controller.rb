class Api::SoundsController < ApplicationController
  before_action :require_logged_in!, only: [:create, :update, :destroy]

  def index
    @sounds = Sound.all
    render "api/sounds/index"
  end

  def create
    
    @sound = Sound.new(sound_params)
     
    if @sound.save  
      render "/api/sounds/show"
    else
      render json: @sound.errors.full_messages, status: 401
    end
  end

  def update
    @sound = Sound.find_by(id: params[:id])
    if @sound.update
      render json: ["Update was successful"], status: 200
    else
      render json: @sound.errors.full_messages, status: 401
    end
  end

  def show
    @sound = Sound.find_by(id: params[:id])
    render "/api/sounds/show"
  end

  def destroy
    @sound = Sound.find_by(id: params[:id])
    if @sound
      @sound.destroy
      render json: {}
    else
      render json: @sound.errors.full_messages, status: 401
    end
  end

  def sound_params
    params.require(:sound).permit(:uploader_id, :title, :tag, :body, :sound, :photo)
  end

end #!end of code
