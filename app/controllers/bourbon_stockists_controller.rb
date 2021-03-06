class BourbonStockistsController < ApplicationController
  before_action :require_logged_in
  before_action :find_bourbon_stockist, except: [:index, :new, :create]

  helper :all

def new
  @bourbon_stockist = BourbonStockist.new

end


def create
  @bourbon_stockist = BourbonStockist.new(bourbon_stockist_params)
  if @bourbon_stockist.save
    redirect_to @bourbon_stockist.bourbon
   else
  render :new
   end
end

def index
  @bourbon_stockists = BourbonStockist.all
end

def edit
end

def show
end

def update
  @bourbon_stockist.update(bourbon_stockist_params)
  if @bourbon_stockist.save
    redirect_to @bourbon_stockist
  else
    render :edit
   end
end

  def destroy
    @bourbon_stockist.destroy
    flash[:notice] = "Note deleted"
    redirect_to bourbons_path
  end





private

def bourbon_stockist_params
   params.require(:bourbon_stockist).permit(:notes, :bourbon_id, :stockist_id)
end

def find_bourbon_stockist
  @bourbon_stockist = BourbonStockist.find(params[:id])
end

end
