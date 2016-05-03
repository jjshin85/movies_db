class MoviesController < ApplicationController

  respond_to :html, :json

  def index
    api_key = ENV["MOVIE_API_KEY"]
    puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    puts api_key
    puts "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    @movies = Movie.all
    if request.xhr?
      render json: { movies: @movies }
    end
  end

  def new

  end
end
