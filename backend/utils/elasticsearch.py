import os, base64, re, logging
from elasticsearch import Elasticsearch
from dotenv import load_dotenv

load_dotenv()

def connect(**kwargs):
    # Log transport details (optional):
    logging.basicConfig(level=logging.INFO)

    # Parse the auth and host from env:
    bonsai = os.environ.get('BONSAI_URL')
    auth = re.search('https\:\/\/(.*)\@', bonsai).group(1).split(':')
    host = bonsai.replace('https://%s:%s@' % (auth[0], auth[1]), '')

    # optional port
    match = re.search('(:\d+)', host)
    if match:
        p = match.group(0)
        host = host.replace(p, '')
        port = int(p.split(':')[1])
    else:
        port = 443

    # Connect to cluster over SSL using auth for best security:
    es_header = [{
    'host': host,
    'port': port,
    'use_ssl': True,
    'http_auth': (auth[0],auth[1])
    }]

    # Instantiate the new Elasticsearch connection:
    return Elasticsearch(es_header)

# Initialize elasticsearch connection
elastic_client = connect()
