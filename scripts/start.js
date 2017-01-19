var fs = require('fs-extra'),
  express = require("express"),
  app = express(),
  makeExecutableSchema = require('graphql-tools').makeExecutableSchema,
  buildSchema = require('graphql').buildSchema,
  graphqlExpress = require('graphql-server-express').graphqlExpress,
  graphiqlExpress = require('graphql-server-express').graphiqlExpress,
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  hostname = process.env.HOSTNAME || 'localhost',
  port = parseInt(process.env.PORT, 10) || 3000,
  publicDir = __dirname + '/../build',
  path = require('path');

var typeDefs = `
    type Person {
      name: String,
      addressLines: [String],
      phone: String,
      email: String,
      photo: String
    }

    type Topic {
      url: String,
      icon: String,
      title: String,
      subtitle: String,
      text: String
    }

    type Job {
      icon: String,
      employer: String,
      url: String,
      position: String,
      dates: String,,
      text: String,
      keywords: String
    }

    type Profile {
      contactInfo: Person,      
      summary: [String],
      techExperience: [Topic],
      workExperience: [Job],
      education: [Job],
      social: [Topic]
    }

    type Query {
      profile(name: String!): Profile
    }`;

const resolvers = {
  Topic: {
    icon(topic) {
      return topic.icon;
    },
    title(topic) {
      return topic.title;
    },
    subtitle(topic) {
      return topic.subtitle;
    },
    text(topic) {
      return topic.text;
    },
  },
  Profile: {
    contactInfo(profile) {
      return profile.contactInfo;
    },
    summary(profile) {
      return profile.summary;
    },
    techExperience(profile) {
      return profile.techExperience;
    },
    workExperience(profile) {
      return profile.workExperience;
    },
    education(profile) {
      return profile.education;
    },
    social(profile) {
      return profile.social;
    }
  },
  Query: {
    profile(err, args) {
      return new Promise((resolve, reject) => {
        // resolve(resumes[args.name]);
        // return;

        fs.readFile(`./src/profiles/${args.name}.json`, function read(err, data) {
          if (err) {
            reject(err);
            return;
          }

          resolve(JSON.parse(data));
        });
      });
    },
  },
};

const executableSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema }));

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log("Simple static server showing %s listening on port %s", publicDir, port);

app.listen(port);
