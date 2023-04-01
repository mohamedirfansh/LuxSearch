from flask import Flask
from flask_cors import CORS, cross_origin
from utils.elasticsearch import elastic_client

from endpoints.search import search
from endpoints.twitter import twitter
from endpoints.reddit import reddit
from endpoints.stats import stats

# init Flask app
app = Flask(__name__)
CORS(app)

# Verify that Python can talk to Bonsai (optional):
elastic_client.ping()
elastic_client.info()

# register blueprints
#app.register_blueprint(search, url_prefix='/api/search/<int:id>')
app.register_blueprint(search, url_prefix='/api/search')
app.register_blueprint(twitter, url_prefix='/api/twitter')
app.register_blueprint(reddit, url_prefix='/api/reddit')
app.register_blueprint(stats, url_prefix='/api/stats')

if __name__ == '__main__':
    app.run(debug=True)