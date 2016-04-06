class Library < ActiveRecord::Base
  belongs_to :user
  has_many :library_movies
  has_many :movies, through: :library_movies
end
