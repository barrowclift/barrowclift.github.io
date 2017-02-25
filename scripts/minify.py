#!/usr/local/bin/python3

import requests

url = "https://cssminifier.com/raw"

reset = open("../css/reset.css").read()
bigfoot = open("../css/bigfoot-number.css").read()
style = open("../css/style.css").read()
syntax = open("../css/syntax.css").read()
hint = open("../css/min/hint.min.css").read()

main = reset + bigfoot + style + syntax 
byteArray = bytearray(main, "utf-8")
data = {'input': byteArray}
response = requests.post(url, data=data)
print(response.text)
