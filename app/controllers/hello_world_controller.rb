class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Henkie", lang: "#{Post.all.first.title}" }
  end
end
