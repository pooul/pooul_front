Rails.application.routes.draw do
  comfy_route :cms_admin, :path => '/cms-admin'



  # Make sure this routeset is defined last
  comfy_route :cms, :path => '/', :sitemap => false
end
