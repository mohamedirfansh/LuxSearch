import csv
from datetime import datetime

def get_posts_from_csv():
    with open('processed_reddit.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        actions = []
        for row in reader:
            action = {
                "index": {"_index": "reddit", "_type": "_doc"}
            }

            post = {
                'username': row['Author'],
                'date': process_date(row['Date']),
                'subreddit': row['Subreddit'],
                'upvotes': row['Upvotes'],
                'comments': row['CommentsCount'],
                'url': row['URL'],
                'original_post': row['Data']
            }
            actions.append(action)
            actions.append(post)
        print(actions)
        return actions

def process_date(date):
    date_formats = ["%m/%d/%Y %I:%M:%S %p", "%m/%d/%Y %H:%M"]
    for date_format in date_formats:
        try:
            date_obj = datetime.strptime(date, date_format)
            output_date_str = date_obj.strftime("%Y-%m-%d")
            return output_date_str
        except ValueError:
            pass