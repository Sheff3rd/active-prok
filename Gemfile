source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'omniauth'
gem 'devise_token_auth'
gem 'omniauth-github'

gem 'rails', '~> 5.0.1'
gem 'pg', '~> 0.18'
gem 'rack-cors'
gem 'bcrypt', '~> 3.1', '>= 3.1.11'
gem 'listen', '~> 3.0.5'

group :development, :test do
  gem 'byebug', platform: :mri
end

group :development do
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # custom
  gem 'capistrano',         require: false
  gem 'capistrano-rvm',     require: false
  gem 'capistrano-rails',   require: false
  gem 'capistrano-bundler', require: false
  gem 'capistrano3-puma',   require: false
end

gem 'puma', '~> 3.0'

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
