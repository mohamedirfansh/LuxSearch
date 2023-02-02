# LuxSearch

## Instragram Scraper
To Edit

## Twitter Scraper
To Edit

## Reddit Scraper
### **[RedditScraperAPI](RedditScraperAPI.py)** - Uses Reddit's API (PRAW)
Limitations 
- Reddit limits number of submissions, only able to get around 185-250 records per category

Results: [RedditAPI](../data-scraping/Data/RedditAPI.xlsx)

### **[PushShiftAPI](PushShiftAPI.py)** - Directly gets the post from Reddit in Json format
Limitations 
- Upvotes are not really accurate (Lots of submission with 1 Upvotes)
- Takes a long time to scrap due to a rate-limit of 60 requests per minute (~6min/Category for 100 records/day (4 Nov to 29 Dec)
- Only able to fetch up to last 3 months (90days)

Results: [PushShiftAPI](../data-scraping/Data/PushShiftAPI.xlsx)