# import necessary libraries
# from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

from flask_sqlalchemy import SQLAlchemy


try:
    DATABASE_URL = os.environ['DATABASE_URL']
except KeyError:
    db_uri = f'postgres://{postgre}:{postgre}@localhost:5432/postgres'

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://wuwhdonjmuwltr:5c09580d54803eb88e33ccc1aedefe563bb18a9e74a15c9fb6c1f77bb5c0cb74@ec2-3-226-165-74.compute-1.amazonaws.com:5432/dcdmoigkf6n09u'

db = SQLAlchemy(app)

@app.route("/")
def home():
    
    return render_template("index2.html")





