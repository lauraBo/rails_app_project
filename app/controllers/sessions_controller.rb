class SessionsController < ApplicationController


  def new
    @user= User.new
  end

  def create
    user = User.find_by(username: params[:username])
    user = user.try(:authenticate, params[:password])
    return redirect_to(controller: 'sessions', action: 'new') unless user

    session[:user_id] = user.id

    @user = user
    redirect_to controller: 'bourbons', action: 'index'
  end

  def destroy
    session.delete :user_id
    redirect_to controller: 'welcome', action: 'hello'
  end

end
