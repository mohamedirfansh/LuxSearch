from flask import Blueprint, jsonify, request
from dummy.data import dummyResponse

search = Blueprint(name='search', import_name=__name__)

@search.route('/', methods=['GET'])
def test():
    output = dummyResponse
    return jsonify(output)