from flask import Blueprint, jsonify, request
from collections import Counter
from dummy.data import dummyResponse
from config import USE_MOCK_DATA
from utils.elasticsearch import elastic_client

stats = Blueprint(name='stats', import_name=__name__)

@stats.route('/likes', methods=['GET'])
def avg_likes():
    query = request.args.get('q')
    query_body = {
        "size": 0,
        "query": {
            "match": {
                "original_tweet": query
            }
        },
        "aggs": {
            "avg_likes": {
                "avg": {
                    "field": "likes"
                }
            }
        }
    }
    res = elastic_client.search(index="twitter", body=query_body)
    return jsonify(res)

@stats.route('/upvotes', methods=['GET'])
def avg_upvotes():
    query = request.args.get('q')
    query_body = {
        "size": 0,
        "query": {
            "match": {
                "original_post": query
            }
        },
        "aggs": {
            "avg_upvotes": {
                "avg": {
                    "field": "upvotes"
                }
            }
        }
    }
    res = elastic_client.search(index="reddit", body=query_body)
    return jsonify(res)

@stats.route('/wordcloud', methods=['GET'])
def wordcloud():
    query = request.args.get('q')
    query_body = {
        "size": 20,
        "query": {
            "match": {
                "processed_tweet": query
            }
        }
    }
    res = elastic_client.search(index="twitter", body=query_body)
    text = " ".join(hit["_source"]["processed_tweet"] for hit in res["hits"]["hits"])
    words = text.replace("[", "").replace("]", "").replace("'", "").split(", ")
    word_counts = Counter(words)
    word_cloud = [{"value": word, "count": count} for word, count in word_counts.items()]
    word_cloud = sorted(word_cloud, key=lambda x: x["count"], reverse=True)
    resp = {
        'wordcloud': word_cloud
    }
    return jsonify(resp)

@stats.route('/postsmonth', methods=['GET'])
def postsmonth():
    query = request.args.get('q')
    query_body_twitter = {
        "size": 0,
        "query": {
            "match": {
                "original_tweet": query
            }
        },
        "aggs": {
            "posts_over_time": {
                "date_histogram": {
                    "field": "date",
                    "calendar_interval": "month"
                }
            }
        }
    }
    query_body_reddit = {
        "size": 0,
        "query": {
            "match": {
                "original_post": query
            }
        },
        "aggs": {
            "posts_over_time": {
                "date_histogram": {
                    "field": "date",
                    "calendar_interval": "month"
                }
            }
        }
    }

    res_twitter = elastic_client.search(index="twitter", body=query_body_twitter)
    res_reddit = elastic_client.search(index="reddit", body=query_body_reddit)
    tweets_over_time = res_twitter['aggregations']['posts_over_time']['buckets']
    posts_over_time = res_reddit['aggregations']['posts_over_time']['buckets']

    # Hacky fix due to incorrect date format in reddit as of now
    dates = ["2022-11-01T00:00:00.000Z", "2022-12-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z", "2023-02-01T00:00:00.000Z"]
    posts = []
    for post in posts_over_time:
        if post['key_as_string'] in dates:
            posts.append(post)     

    res = {
        'twitter': [count['doc_count'] for count in tweets_over_time],
        'reddit': [count['doc_count'] for count in posts]
    }
    return jsonify(res)

@stats.route('/split', methods=['GET'])
def split():
    query = request.args.get('q')
    query_body_twitter = {
        "size": 0,
        "query": {
            "match": {
                "original_tweet": query
            }
        }
    }
    query_body_reddit = {
        "size": 0,
        "query": {
            "match": {
                "original_post": query
            }
        }
    }
    res_twitter = elastic_client.search(index="twitter", body=query_body_twitter)
    res_reddit = elastic_client.search(index="reddit", body=query_body_reddit)
    tweets = res_twitter['hits']['total']['value']
    posts = res_reddit['hits']['total']['value']
    res = {
        'tweets': tweets,
        'posts': posts
    }
    return jsonify(res)

@stats.route('/twitterusers', methods=['GET'])
def top_twitter_users():
    query = request.args.get('q')
    query_body = {
        "size": 0,
        "query": {
            "match": {
                "processed_tweet": query
            }
        },
        "aggs": {
            "group_by_username": {
                "terms": {
                    "field": "username",
                    "size": 10
                }
            }
        }
    }
    twitter_users = elastic_client.search(index="twitter", body=query_body)
    res = {
        'index': 'twitter',
        'labels': [bucket['key'] for bucket in twitter_users['aggregations']['group_by_username']['buckets']],
        'data': [bucket['doc_count'] for bucket in twitter_users['aggregations']['group_by_username']['buckets']]
    }
    return jsonify(res)

@stats.route('/redditusers', methods=['GET'])
def top_reddit_users():
    query = request.args.get('q')
    query_body = {
        "size": 0,
        "query": {
            "match": {
                "original_post": query
            }
        },
        "aggs": {
            "group_by_username": {
                "terms": {
                    "field": "username",
                    "size": 10
                }
            }
        }
    }
    reddit_users = elastic_client.search(index="reddit", body=query_body)
    res = {
        'index': 'reddit',
        'labels': [bucket['key'] for bucket in reddit_users['aggregations']['group_by_username']['buckets']],
        'data': [bucket['doc_count'] for bucket in reddit_users['aggregations']['group_by_username']['buckets']]
    }
    return jsonify(res)

@stats.route('/subreddit', methods=['GET'])
def top_subreddit():
    query = request.args.get('q')
    query_body = {
        "size": 0,
        "query": {
            "match": {
                "original_post": query
            }
        },
        "aggs": {
            "group_by_username": {
                "terms": {
                    "field": "subreddit",
                    "size": 10
                }
            }
        }
    }
    res = elastic_client.search(index="reddit", body=query_body)
    return jsonify(res)