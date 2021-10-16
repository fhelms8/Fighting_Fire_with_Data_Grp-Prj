from threading import active_count
import pandas as pd
import datetime as dt
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, json, jsonify

##################
# Database Setup
##################


connection_url = 'postgresql+psycopg2://postgres:postgre@localhost:5432/postgres'
engine = create_engine(connection_url)

engine.table_names()

# Reflect an existing database into a new model
Base = automap_base()

# Reflect the tables
Base.prepare(engine, reflect=True)

# Table reference
# Measurement = Base.classes.measurement
# Station = Base.classes.station

# Open/create session
session = Session(engine)

##################
# Flask Setup
##################
app = Flask(__name__)

##################
# Flask Routes
##################





