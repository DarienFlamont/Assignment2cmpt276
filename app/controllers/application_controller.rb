class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def histo
  render file: "/public/histogram.html"
  end
end
