from flask import Flask
from flask_cors import CORS, cross_origin
from endpoints.search import search

# init Flask app
app = Flask(__name__)
CORS(app)

# register blueprints
#app.register_blueprint(search, url_prefix='/api/search/<int:id>')
app.register_blueprint(search, url_prefix='/api/search')

if __name__ == '__main__':
    app.run(debug=True)