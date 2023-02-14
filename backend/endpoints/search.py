from flask import Blueprint, jsonify, request
from .dummyData import results

search = Blueprint(name='search', import_name=__name__)

@search.route('/', methods=['GET'])
def test():
    output = {"data": results}
    return jsonify(output)