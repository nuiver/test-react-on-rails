class ProductTableController < ApplicationController
  def index
    @product_table_props = { products: "#{Product.all.to_json}" }
  end
end
