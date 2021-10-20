# from flask import Flask, render_template, redirect
# from flask_pymongo import PyMongo
# import fire_data

# # Create an instance of Flask
# app = Flask(__name__)

# # Use PyMongo to establish Mongo connection
# mongo = PyMongo(app, uri="mongodb+srv://cluster0.3tcle.mongodb.net/myFirstDatabase")


# # Route to render index.html template using data from Mongo
# @app.route("/")
# def home():

#     # Find one record of data from the mongo database
#     fires0_data = mongo.db.collection.find_one()

#     # Return template and data
#     return render_template("index.html", smokey=fires0_data)


# # Route that will trigger the scrape function
# @app.route("/scrape")
# def scrape():

#     # Run the scrape function
#     fires_data = fire_data.get_info()

#     # Update the Mongo database using update and upsert=True
#     mongo.db.collection.update({}, fires_data, upsert=True)

#     # Redirect back to home page
#     return redirect("/")


# if __name__ == "__main__":
#     app.run(debug=True)
# import os
# import psycopg2
# DATABASE_URL = os.environ.get('postgres://wuwhdonjmuwltr:5c09580d54803eb88e33ccc1aedefe563bb18a9e74a15c9fb6c1f77bb5c0cb74@localhost:5432/dcdmoigkf6n09u')
# con = psycopg2.connect(DATABASE_URL)
# cur = con.cursor()

import os
import psycopg2

DATABASE_URL = os.environ['DATABASE_URL']

conn = psycopg2.connect(DATABASE_URL, sslmode='require')