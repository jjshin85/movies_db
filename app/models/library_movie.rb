class LibraryMovie < ActiveRecord::Base
  belongs_to :user
  belongs_to :library
  belongs_to :movie
end
