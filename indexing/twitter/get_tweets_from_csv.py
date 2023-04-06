import csv

def get_tweets_from_csv():
    with open('tweets_final.csv', 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        actions = []
        try:
            for row in reader:
                action = {
                    "index": {"_index": "twitter", "_type": "_doc"}
                }
                tweet = {
                    'username': row['User'],
                    'date': row['Date Created'].split()[0],
                    'likes': row['Number of Likes'],
                    'retweets': row['Number of Retweets'],
                    'url': row['URL'],
                    'relevance': row['Relevance'],
                    'polarity': row['Polarity'],
                    'body': row['Tweet']
                }
                actions.append(action)
                actions.append(tweet)
            return actions
        except:
            print('Error')