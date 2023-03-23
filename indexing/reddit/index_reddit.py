import requests
import json

from secrets import BONSAI_URL
from get_posts_from_csv import get_posts_from_csv

f = open('reddit_mapping_schema.json')
reddit_schema = json.load(f)

test_data = {
  "username": "MakeTheCut_fjp",
  "date": "2022-11-04",
  "title": "Balenciaga Track Clear Sole CSJ [Good batch]",
  "url": "https://www.reddit.com//r/FashionReps/comments/ym4rbn/balenciaga_track_clear_sole_csj_good_batch/",
  "upvotes": 1,
  "comments": 2,
  "original_post": "removed Balenciaga Track Clear Sole CSJ Good batch"
}

def get_index(index):
    res = requests.get(f'{BONSAI_URL}/{index}')
    print(res.json())

def create_index(index):
    res = requests.put(f'{BONSAI_URL}/{index}', json=reddit_schema)
    print(res.json())

def delete_index(index):
    res = requests.delete(f'{BONSAI_URL}/{index}')
    print(res.json())

def add_data(index, data):
    res = requests.post(f'{BONSAI_URL}/{index}/_doc', json=data)
    print(res.json())

def add_data_bulk():
    actions = get_posts_from_csv()
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
            "match": {
            "original_post": query
            }
        }
    }
    res = requests.post(f'{BONSAI_URL}/{index}/_search', json=data)
    print(res.json())

if __name__ == '__main__':
    # add_data('reddit', test_data)
    # create_index('reddit')
    get_data('reddit', 'ralph lauren')
    # delete_index('reddit')
    # add_data_bulk()