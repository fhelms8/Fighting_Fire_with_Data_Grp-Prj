import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, join, outerjoin, MetaData, Table
from flask import Flask, jsonify, render_template

from connection import connect_string

class all_fire_info ():

    engine = create_engine(connect_string)
    engine.table_names()
    Base = automap_base()
    Base.prepare(engine, reflect=True)
    sessions = Session(engine)
    app = Flask(__name__)

    def fires():
        __tablename__ = "texas_fires"
        print(__tablename__)

