json.extract! product, :id, :name, :price, :stocked, :category, :created_at, :updated_at
json.url product_url(product, format: :json)