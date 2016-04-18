class UsersController < ApplicationController

  def show
    @user = User.find(session[:user_id])
    @user_id = @user.id
    @libraries = @user.libraries
  end
end
