from flask import Blueprint, jsonify, request
from dummy.data import dummyResponse
from config import USE_MOCK_DATA
from utils.elasticsearch import elastic_client

search = Blueprint(name='search', import_name=__name__)

@search.route('/', methods=['GET'])
def search_query():
    if USE_MOCK_DATA:
        output = dummyResponse
        return jsonify(output)

    query = request.args.get('q')
    query_body = {
        "size": 10,
        "query": {
            "match": {
            "processed_tweet": query
            }
        }
    }

    res = elastic_client.search(index="twitter", body=query_body)
    return jsonify(res)