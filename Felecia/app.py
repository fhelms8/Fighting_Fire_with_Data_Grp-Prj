# import necessary libraries
# from models import create_classes
import os
import sqlalchemy
import data_info
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, join, outerjoin, MetaData, Table
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
# from connection import connect_string

   
    
@app.route("/")
def test():
    return render_template("index.html")

@app.route("/api/spi")
def spi():
    results = data_info.get_spi()
    return jsonify(results)

@app.route("/api/paleo")
def paleo():
    p_results = data_info.get_paleo()
    return jsonify(p_results)


@app.route("/api/acres_year")
def acres_year():
    AY_results = data_info.get_acres_year()
    return jsonify(AY_results)

@app.route("/api/texas_fires")
def texas_fires():
    TF_results = data_info.get_texas_fires()
    return jsonify(TF_results)


if __name__ == "__main__":
    app.run()