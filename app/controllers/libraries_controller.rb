class LibrariesController < ApplicationController

  def index
    @user_id = params[:user_id]
    @libraries = Library.where(user_id: @user_id)
    if request.xhr?
      render json: @libraries
    end
  end

  def show
    @user_id = params[:user_id]
    @library_id = params[:id]
    library = Library.find(@library_id)
    @movies = library.movies
    if request.xhr?
      render json: @movies
    end
  end

end
