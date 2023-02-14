from flask import Flask
from flask_restful import Api

app = Flask(__name__)

@app.route('/')
def hello():
    return 'hi'

if __name__ == '__main__':
    app.run(debug=True)