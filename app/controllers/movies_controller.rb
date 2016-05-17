class MoviesController < ApplicationController

  respond_to :html, :json

  def index
    if params[:query]
      url = "#{BASE_URL}/search/movie?query=#{params[:query]}&#{API_KEY}"
    else
      url = "#{BASE_URL}/movie/popular?#{API_KEY}"
    end
    response = HTTParty.get(url).parsed_response
    @movies = response["results"]
    if request.xhr?
      render json: { movies: @movies }
    end
  end

  def new
  end

  private
  API_KEY = ENV['MOVIE_API_KEY']
  BASE_URL = "https://api.themoviedb.org/3";
  BASE_IMAGE_URL = "http://image.tmdb.org/t/p/";

end
