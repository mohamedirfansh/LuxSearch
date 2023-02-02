# -*- coding: utf-8 -*-
"""
Created on Wed Feb  1 22:02:23 2023

@author: ng_zh
"""
import pandas
import praw
from datetime import datetime
from dateutil import tz

from_zone = tz.gettz('UTC')
clientID = "R2zfuXe4rde1Bu0Hj24Alg"
secret = "iEvYaI91lEGVl4M9FZsJtHvK5KVlPA"
userAgent = "SC4021"


readOnly = praw.Reddit(client_id=clientID, client_secret=secret, user_agent=userAgent)

Brands = ['Gucci','Dior','Chanel','Louis Vuitton','Hermes','Rolex','Tiffany & Co.']

Excel = pandas.ExcelWriter(r"C:\Users\ng_zh\Desktop\LuxSearch\data-scraping\Data\RedditAPI.xlsx", engine = 'xlsxwriter')
for brand in Brands:
    print("Working on " + brand)
    posts = readOnly.subreddit('all').search(brand)

    tempTable = {"Date": [], "Title": [], "Post Text": [], "Author": [], "Upvotes": [], "CommentsCount": [], "URL": []}
    for post in posts:

        tempTable["Date"].append(datetime.fromtimestamp(post.created_utc))
        tempTable["Title"].append(post.title)
        tempTable["Post Text"].append(post.selftext)
        tempTable["Author"].append(post.author.name)
        tempTable["Upvotes"].append(post.score)
        tempTable["CommentsCount"].append(post.num_comments)
        try:
            tempTable["URL"].append(post.url_overridden_by_dest)
        except:
            tempTable["URL"].append(post.url)  
    toSave = pandas.DataFrame(tempTable)
    toSave.to_excel(Excel, sheet_name=brand, index=False) 

Excel.save()

