class UserController < ApplicationController
  def index
    respond_to do |format|
      format.html { render inline: "", layout: "application" }
      format.json { render json: data }
    end
  end

  private

  def data
    {
      first_name: "Keanu",
      last_name: "Reeves"
    }
  end
end
