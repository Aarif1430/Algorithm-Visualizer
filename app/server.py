from flask import Flask, render_template, request
from app.scripts.sorting_algorithms import Sorting
import json
import asyncio
app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template('index.html')


@app.route('/generate', methods=['GET', 'POST'])
def generate():
    sort = Sorting()
    try:
        sortFunction = request.form.getlist('array_of_objects[0][sortFunction]')
        array = request.form.getlist('array_of_objects[1][data][]')
        array = list(map(float, array))
        return json.dumps((sort.merge_sort(array)))

    except Exception as e:
        return str(e)


if __name__ == '__main__':
    app.run(debug=True)