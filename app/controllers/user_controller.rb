class UserController < ApplicationController
  def index
    @user_data = data.to_json

    respond_to do |format|
      format.html { render }
      format.json { render json: data }
    end
  end

  def update
    user = data
    user_params = params["user"]

    user.update(user_params.to_hash)

    render json: data
  end

  private

  def data
    User.select(:id, :first_name, :last_name).last
  end
end
