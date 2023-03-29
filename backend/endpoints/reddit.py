from flask import Blueprint, jsonify, request
from dummy.data import dummyResponse
from config import USE_MOCK_DATA
from utils.elasticsearch import elastic_client

reddit = Blueprint(name='reddit', import_name=__name__)

@reddit.route('/', methods=['GET'])
def reddit_search():
    if USE_MOCK_DATA:
        output = dummyResponse
        return jsonify(output)
    
    query = request.args.get('q')
    start = request.args.get('start', 0)
    query_body = {
        "from": start,
        "size": 10,
        "query": {
            "match": {
            "original_post": query
            }
        }
    }

    res = elastic_client.search(index="reddit", body=query_body)
    return jsonify(res)