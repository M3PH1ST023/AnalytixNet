from pymongo import MongoClient

mongo_client = MongoClient('mongodb+srv://athidya23032003:Athidya%402019@cluster0.a5oksmw.mongodb.net/')
db = mongo_client.AnalytixNet

user = db.Users

def connectUser():
    return user