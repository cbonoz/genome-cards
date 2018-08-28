import os
from flask import request, jsonify, Flask
from flask_cors import CORS
import genomelink
import json

GENOME_USER = 'GENOMELINKTEST001'

app = Flask(__name__)
CORS(app)

PORT = 3001

@app.route('/hello')
def hello_world():
    return 'Hello, World!'

# Listen for conversation state change events.
@app.route('/report/<report_name>', methods=['GET'])
def report(report_name):
    report = genomelink.Report.fetch(name=report_name, population='european', token=GENOME_USER)
    return jsonify({
        'summary': report.summary,
        'phenotype': report.phenotype,
        'population': report.population,
        'scores': report.scores
    })

if __name__ == '__main__':
      app.run(port=PORT)
      print('server running on port ' + str(PORT))
