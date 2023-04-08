import csv
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn import svm
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score, f1_score

stop_words = set(stopwords.words('english'))

sentences = []
labels = []
with open(r"C:\Users\ng_zh\Downloads\Polarity (1).csv", 'r', encoding='utf-8') as csvfile:
    reader = csv.reader(csvfile)
    next(reader) 
    for row in reader:
        sentence = row[5] # Assuming the sentence is in the 6th column
        if(sentence != ""):
            print(row)  
            label = row[2]      # Assuming the label is in the 3rd column
            # words = sentence.split()
            # words = [w.lower() for w in words if w not in stop_words]
            sentences.append( sentence )
            if(label== "R"):
                labels.append(1)
            elif(label == "I"):
                labels.append(0)
            else:
                labels.append(label)
            
        


vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(sentences)


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.3)


clf = svm.SVC(kernel='linear')
clf.fit(X_train, y_train)

y_pred = clf.predict(X_test)


print("Confusion Matrix:")
print(confusion_matrix(y_test,y_pred))
print("\nClassification Report:")
print(classification_report(y_test,y_pred))
print("\nAccuracy:")
print(accuracy_score(y_test, y_pred))
print("\F1 Score:")
print(f1_score(y_test, y_pred, average=None))

#Uncomment if predicting

# import pandas
# df = pandas.read_csv(r"C:\Users\ng_zh\Downloads\Polarity (1).csv")

# polarity = []

# topredict = vectorizer.fit_transform(df["Tweet"].tolist())


# predict = clf.predict(topredict)
    
# predict = pandas.DataFrame(predict)
# predict.to_csv(r"C:\Users\ng_zh\Downloads\result.csv",index=False)