# LuxSearch


### Data Preprocessing
Items removed: 
1. URLs in text data
2. Emails
3. Punctuations
4. Numbers
5. Stopwords (included nan and removed; excluded not and no) --> used nltk.corpus stopwords

Binary Advertisement Removal:
1. Tweets: 
  - Check out this listing
  - So good I had to share
2. Reddit posts:
  - WTB
  - WTS
  - WTT
  - QC
  - FS
  - FT
  - WTC
  - LC
  - PC
  
### Models Trained
1. Naive Bayes
2. Support Vector Machines (SVM)
3. Logistic Regression
4. Random Forest
5. DistilBERT
