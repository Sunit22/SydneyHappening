'use strict'

// module.exports = () => {
//     let response = [{ name: 'Bladder Burst', description: 'Some quick example text to build on the card title and make up the bulk of the card content.', image:'https://storage.googleapis.com/ehimages/2017/7/18/img_fb6a55d6afeb299fd6478a0413edd3b8_1500363008588_original.jpg' },
//      { name: 'Vivid Sydney', description: 'Some quick example text to build on the card title and make up the bulk of the card content.', image:'https://awol.junkee.com/wp-content/uploads/2016/03/Songlines_-_render_impression_by_Artists_in_Motion_inspired_by_Artist_Ka...-680x453.jpg' }];
//     return Promise.resolve(response);
// }


'use strict'

const dbClient = require('mongodb').MongoClient;

module.exports = () => {

  return connect().then(client => {
    const db = client.db('sydneyhappening')

    return db.collection('Events').findOne({}).then(result => {
      return result;
    })
    // .insertOne({})
    // .then(() => db.collection('people').drop())
    // .then(() => {
    //   db.collection('words').createIndex('name');
    //   db.collection('words').insertOne({ word: 'Test' });
    // });
  });
}


let connect = () => {
  return new Promise((res, rej) => {
    const url = "mongodb://root:SydneyHappening2018@ds259742.mlab.com:59742/sydneyhappening";
    dbClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        rej(err);
      } else {
        res(client);
      }
    })
  });
}

let close = (db) => {
  if (db) {
    db.close();
  }
}




