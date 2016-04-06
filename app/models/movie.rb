class Movie < ActiveRecord::Base
  has_many :library_movies
end
