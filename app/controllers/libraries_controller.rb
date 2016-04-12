class LibrariesController < ApplicationController

  def index
    @user_id = params[:user_id]
    libraries = Library.where(user_id: @user_id)
    puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    puts "library controller called"
    if request.xhr?
      render json: { libraries: @libraries }
    end
  end

end
