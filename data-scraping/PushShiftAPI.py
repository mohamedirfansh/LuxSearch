# -*- coding: utf-8 -*-
"""
Created on Wed Feb  1 22:57:13 2023

@author: ng_zh
"""
import pandas
import requests
from bs4 import BeautifulSoup
import json
import time

daysFrom1Jan22 = 100#397 
daysFrom31Dec22 = 31
Start = time.time()

Brands = ['Gucci','Dior','Chanel','Louis%20Vuitton','Hermes','Rolex','Tiffany%20%26%20Co.']
Excel = pandas.ExcelWriter(r"C:\Users\ng_zh\Desktop\LuxSearch\data-scraping\Data\PushShiftAPI.xlsx", engine = 'xlsxwriter')
for brand in Brands:
    print("Working on " + brand)
    daysFrom1Jan22 = 90
    tempTable = {"Date": [], "Subreddit" : [], "Title": [], "Post Text": [], "Author": [], "Upvotes": [], "CommentsCount": [], "URL": []}
    while((daysFrom1Jan22 - 1) != daysFrom31Dec22):
        x = requests.get('https://api.pushshift.io/reddit/search/submission?q='+ brand +'&over_18=false&after='+ str(daysFrom1Jan22) +'d&before='+ str(daysFrom1Jan22 - 1) +'d&sort=created_utc&size=100')
        Page = BeautifulSoup(x.content, 'html.parser')
        posts = json.loads(Page.text)
        for post in posts['data']:
            tempTable["Date"].append(post["utc_datetime_str"])
            tempTable["Subreddit"].append(post["subreddit"])
            tempTable["Title"].append(post["title"])
            tempTable["Post Text"].append(post["selftext"])
            tempTable["Author"].append(post["author"])
            tempTable["Upvotes"].append(post["score"])
            tempTable["CommentsCount"].append(post["num_comments"])
            tempTable["URL"].append("https://www.reddit.com/" + post["permalink"])  
        daysFrom1Jan22 -= 1
        time.sleep(0.5)
    toSave = pandas.DataFrame(tempTable)
    toSave = toSave.drop_duplicates(subset=['Title'])
    if(brand == 'Louis%20Vuitton'):
        toSave.to_excel(Excel, sheet_name='Louis Vuitton', index=False) 
    elif(brand == 'Tiffany%20%26%20Co.'):
        toSave.to_excel(Excel, sheet_name='Tiffany & Co.', index=False) 
    else:
        toSave.to_excel(Excel, sheet_name=brand, index=False) 
    print("--- %s seconds ---" % (time.time() - Start))
    Start = time.time()
Excel.save()




