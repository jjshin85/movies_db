class LibrariesController < ApplicationController

  def index
    @user_id = params[:user_id]
    libraries = Library.where(user_id: @user_id)
    if request.xhr?
      render json: { libraries: @libraries }
    end
  end

  def show
    @user_id = params[:user_id]
    @library = Library.find(params[:id])
    @libraryMovies = @library.movies
    if request.xhr?
      render json: { libraryMovies: @libraryMovies }
    end
  end

end
