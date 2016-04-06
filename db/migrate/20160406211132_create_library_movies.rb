class CreateLibraryMovies < ActiveRecord::Migration
  def change
    create_table :library_movies do |t|
      t.integer :library_id
      t.integer :user_id
      t.integer :movie_id
      t.timestamps null: false
    end
  end
end
