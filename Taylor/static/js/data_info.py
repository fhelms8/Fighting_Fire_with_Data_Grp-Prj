from sqlalchemy import create_engine
import os 
import pandas as pd

connect_string = os.getenv('DATABASE_URL2', '')
# connect_string = "postgresql://wuwhdonjmuwltr:5c09580d54803eb88e33ccc1aedefe563bb18a9e74a15c9fb6c1f77bb5c0cb74@ec2-3-226-165-74.compute-1.amazonaws.com:5432/dcdmoigkf6n09u"
print("conn string", connect_string)
engine = create_engine(connect_string)

def get_fires_2006():
    sql = """
    Select * from texas_fires
    where fire_year = 2006
    """
    results_df = pd.read_sql(sql, con=engine)
    results = results_df.to_dict(orient='records')
    return results
   
if __name__ == '__main__':
    info = get_fires_2006()
    print(info)