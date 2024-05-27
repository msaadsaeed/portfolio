
import json
import pandas as pd

data = pd.read_csv('/content/data.csv', index_col=0)

data.head()

json_data = data.to_json()
print(json_data)

with open('data.json', 'w') as f:
  json.dump(json_data, f)
 