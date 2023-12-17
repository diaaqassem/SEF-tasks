const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "task-1";

//connect
mongoClient.connect(connectionUrl, (err, data) => {
  if (err) {
    console.log("error has occured");
  }
  console.log("all perfect");
  const db = data.db(dbName);

  //   insert one to add 2 docs
  let collection = db.collection("students");
  let doc = { name: "diaa", age: 21 };
  let doc2 = { name: "omar", age: 20 };
  collection.insertOne(doc, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("insert first doc");
  });
  collection.insertOne(doc2, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log("insert second doc");
  });
  //   insert 10 docs
  db.collection("students").insertMany(
    [
      {
        name: "diaa",
        age: 27,
      },
      {
        name: "ahmed",
        age: 27,
      },
      {
        name: "mohammed",
        age: 27,
      },
      {
        name: "ziad",
        age: 27,
      },
      {
        name: "zaki",
        age: 27,
      },
      {
        name: "mostafa",
        age: 34,
      },
      {
        name: "said",
        age: 23,
      },
      {
        name: "hazem",
        age: 23,
      },
      {
        name: "mostafa",
        age: 65,
      },
      {
        name: "gamal",
        age: 97,
      },
    ],
    (error, data) => {
      if (error) {
        console.log("unable to insert data");
      } else {
        console.log("insert docs :", data.insertedCount);
      }
    }
  );
  //find age:27
  db.collection("students")
    .find({ age: 27 })
    .toArray((err, docs) => {
      if (err) {
        console.log("error");
      }
      console.log("docs with age:27 ", docs);
    });
  // find 3 age:27
  db.collection("students")
    .find({ age: 27 })
    .limit(3)
    .toArray((err, docs) => {
      if (err) {
        console.log("error");
      }
      console.log("docs 3 with age:27 ", docs);
    });
  // update for the first four
  db.collection("students")
    .updateOne(
      { _id: mongodb.ObjectId("657e5ff0a0b868227654be37") },
      {
        $set: {
          name: "mohamed",
        },
        $inc: { age: 4 },
      }
    )
    .then((docs) => {
      console.log("num of modify ", docs.modifiedCount);
    })
    .catch((err) => {
      console.log(err);
    });
  db.collection("students")
    .updateOne(
      { _id: mongodb.ObjectId("657e5ff0a0b868227654be39") },
      {
        $set: {
          name: "shaker",
        },
        $inc: { age: 4 },
      }
    )
    .then((docs) => {
      console.log("num of modify ", docs.modifiedCount);
    })
    .catch((err) => {
      console.log(err);
    });
  db.collection("students")
    .updateOne(
      { _id: mongodb.ObjectId("657e5ff0a0b868227654be3a") },
      {
        $set: {
          name: "khaled",
        },
        $inc: { age: 4 },
      }
    )
    .then((docs) => {
      console.log("num of modify ", docs.modifiedCount);
    })
    .catch((err) => {
      console.log(err);
    });
  db.collection("students")
    .updateOne(
      { _id: mongodb.ObjectId("657e5ff0a0b868227654be3b") },
      {
        $set: {
          name: "omar",
        },
        $inc: { age: 4 },
      }
    )
    .then((docs) => {
      console.log("num of modify ", docs.modifiedCount);
    })
    .catch((err) => {
      console.log(err);
    });
  // update many inc 10 on age
  db.collection("students")
    .updateMany(
      {},
      {
        $inc: { age: 10 },
      }
    )
    .then((docs) => {
      console.log("modify", docs.modifiedCount);
    })
    .catch((err) => {
      console.log(err);
    });
  // delete age :41
  db.collection("students")
    .deleteMany({ age: 41 })
    .then((docs) => {
      console.log("num of delete :", docs.deletedCount);
    })
    .catch((err) => {
      console.log(err);
    });
});
