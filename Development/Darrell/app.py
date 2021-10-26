# from flask import Flask, render_template, request


# app = Flask(__name__)

# # Define the routes for the HTML page

# # Default route
# @app.route("/")
# def index():
#     return render_template(
#         "index.html",
#         r
#         )


# @app.route('/', methods=['POST'])
# def my_form_post():
    
#     return render_template(
#         "index.html",
        
#     )

# if __name__ == "__main__":
#     app.run()

from flask import Flask
app = Flask(__name__)

@app.route('/alpha')
def alpha():
    return "This is the alpha version"

@app.route('/beta')
def beta():
    return "This is the beta version"

if __name__=='__main__':
    app.run(debug=True)