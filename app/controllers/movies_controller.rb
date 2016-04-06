class MoviesController < ApplicationController

  respond_to :html, :json

  def index
    @movies = Movie.all
    if request.xhr?
      render json: { movies: @movies }
    end
  end

  def new

  end
end
