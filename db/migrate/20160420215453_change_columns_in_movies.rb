class ChangeColumnsInMovies < ActiveRecord::Migration
  def change
    add_column :movies, :moviedb_id, :integer
    add_column :movies, :original_title, :string
    add_column :movies, :vote_count, :integer
    add_column :movies, :vote_average, :float
    add_column :movies, :poster_path, :string
    add_column :movies, :release_date, :string
    add_column :movies, :overview, :text
    add_column :movies, :original_language, :string

    remove_column :movies, :description, :text
    remove_column :movies, :release_year, :integer
    remove_column :movies, :image_url, :string
  end
end
