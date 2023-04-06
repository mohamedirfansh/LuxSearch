import requests
import json

from secrets import BONSAI_URL
from get_tweets_from_csv import get_tweets_from_csv

f = open('tweets_mapping_schema.json')
tweets_schema = json.load(f)

test_data = {
    "username": "RivalTimes",
    "date": "2022-11-01T23:52:17Z",
    "url": "https://twitter.com/RivalTimes/status/1587593402899628040",
    "likes": 2,
    "retweets": 5,
    "original_tweet": "Why is it not enough that Ralph Lauren has withdrawn the sacks that copied the traditional Mexican serape",
    "processed_tweet": ["why", "not", "enough", "ralph", "lauren", "withdrawn", "sacks", "copied", "traditional", "mexican", "serape"]
}

def get_index(index):
    res = requests.get(f'{BONSAI_URL}/{index}')
    print(res.json())

def create_index(index):
    res = requests.put(f'{BONSAI_URL}/{index}', json=tweets_schema)
    print(res.json())

def delete_index(index):
    res = requests.delete(f'{BONSAI_URL}/{index}')
    print(res.json())

def add_data(index, data):
    res = requests.post(f'{BONSAI_URL}/{index}/_doc', json=data)
    print(res.json())

def add_data_bulk():
    actions = get_tweets_from_csv()
    data = '\n'.join([json.dumps(action) for action in actions]) + '\n'
    res = requests.post(f'{BONSAI_URL}/_bulk', headers={'Content-Type': 'application/x-ndjson'}, data=data)
    print(res.json())

def get_all_data(index):
    data = { "query": { "match_all": {} } }
    res = requests.post(f'{BONSAI_URL}/{index}/_search', json=data)
    print(res.json())

def get_data(index, query):
    data = {
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
    res = requests.post(f'{BONSAI_URL}/{index}/_search', json=data)
    print(res.json())

if __name__ == '__main__':
    # create_index('twitter')
    get_data('twitter', 'ralph lauren')
    # delete_index('twitter')
    # add_data_bulk()