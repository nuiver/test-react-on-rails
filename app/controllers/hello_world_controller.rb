class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Henkie", lang: "#{Product.all.first.name}" }
  end
end
