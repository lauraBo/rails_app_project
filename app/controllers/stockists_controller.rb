class StockistsController < ApplicationController
  before_action :require_logged_in
  before_action :find_stockist, except: [:index, :new, :create]


  def index
    @stockists = Stockist.all
    @stockist = Stockist.new
  end

  def show
  end

  def new
    @stockist = Stockist.new
  end

  def create
    @stockist = Stockist.new(stockist_params)

    if @stockist.save
       render 'stockists/single', :layout =>false
     else
       render :index
   end
  end

  def edit
  end

  def update
    @stockist.update(stockist_params)
    if @stockist.save
      redirect_to @stockist
    else
      render :edit
     end
  end

  def destroy
    @stockist.destroy
    flash[:notice] = "Stockist deleted"
    redirect_to stockists_path
  end

  private

  def stockist_params
    params.require(:stockist).permit(:name, :address, :email, :phone, :bourbon_ids => [])
  end

  def find_stockist
    @stockist = Stockist.find(params[:id])
  end

  end
