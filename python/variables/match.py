def http_error(status):
    match status:
       case 400:
         return "bad request"
       case 404:
         return "not found"
       case 403 | 405 | 408:
         return "forbidden"
       case _:
         return "something's wrong with the internet"
       
print(http_error(408))       