class UsersController < ApplicationController

  def show
    @user = User.find(session[:user_id])
    @libraries = @user.libraries
  end
end
