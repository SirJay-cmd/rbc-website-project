import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import ministriesRouter from './routes/ministries.js';
import eventsRouter from './routes/events.js';
import announcementsRouter from './routes/announcements.js';
import mediaRouter from './routes/media.js';
import contactRouter from './routes/contact.js';

const app = express();
app.use(cors());
app.use(express.json());

// ...existing code...

// Connect to MongoDB
import { MongoClient, ServerApiVersion } from 'mongodb';


const uri = "mongodb+srv://peterrjason:<ns3@sonsv9>@jaydev.8q9n9ps.mongodb.net/?retryWrites=true&w=majority&appName=jaydev";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ...existing code...
// Routes

//API ROUTES



app.use('/api/ministries', ministriesRouter);
app.use('/api/events', eventsRouter);
app.use('/api/announcements', announcementsRouter);
app.use('/api/media', mediaRouter);
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => res.send('RBC API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 