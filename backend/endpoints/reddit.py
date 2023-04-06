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
            "function_score": {
            "query": {
                "match": {
                    "body": query
                }
            },
            "functions": [
                {
                    "filter": {
                        "term": {
                            "relevance": 1
                        }
                    },
                    "weight": 2
                },
                {
                    "filter": {
                        "term": {
                            "relevance": 0
                        }
                    },
                        "weight": 1
                },
                {
                    "field_value_factor": {
                        "field": "likes",
                        "factor": 0.1,
                        "modifier": "log1p",
                        "missing": 1
                    }
                },
                {
                    "field_value_factor": {
                        "field": "retweets",
                        "factor": 0.1,
                        "modifier": "log1p",
                        "missing": 1
                    }
                }
            ],
                "score_mode": "sum",
                "boost_mode": "sum"
            }
        }
    }

    res = elastic_client.search(index="reddit", body=query_body)
    return jsonify(res)