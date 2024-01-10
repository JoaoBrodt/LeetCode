import pandas as pd

def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
  return employees.iloc[0:3]






# import pandas as pd

# def selectFirstRows(employees: pd.DataFrame) -> pd.DataFrame:
#     return employees.head(3)