from sqlalchemy import create_engine
import os 
import pandas as pd

connect_string = os.getenv('DATABASE_URL2', '')
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