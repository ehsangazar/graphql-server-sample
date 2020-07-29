require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const uniqid = require('uniqid');

const posts = [
  {
    id: uniqid(),
    url: 'https://graphql.org',
    title: 'The official GraphQL website.',
    description: "Aliquip nulla aliqua aliqua irure nulla amet nulla irure esse. Laboris non ut eu amet ea qui mollit. Sint consequat minim eu eu culpa consectetur quis duis qui fugiat nulla Lorem amet aute. Cillum sint cillum in occaecat sint duis esse. Culpa culpa reprehenderit sint quis elit. Incididunt ad esse qui fugiat cupidatat ex commodo dolor nisi eiusmod."
  },
  {
    id: uniqid(),
    url: 'https://www.howtographql.com',
    title: 'Awesome GraphQL tutorial.',
    description: "In dolor quis ad officia reprehenderit quis aliquip velit proident eu occaecat cillum dolore amet. Dolore ut ad sint nulla. Officia occaecat pariatur reprehenderit in labore nulla. Qui elit ullamco nisi consequat non consectetur dolor. Anim cillum irure deserunt pariatur fugiat nisi aliqua qui. Velit nisi nulla cillum sint veniam magna elit. In ullamco aliquip anim cupidatat quis elit laboris pariatur consequat cillum enim sunt."
  },
  {
    id: uniqid(),
    url: 'https://github.com/graphcool/graphql-yoga',
    title: 'Fully-featured GraphQL server for JavaScript',
    description: "Esse et mollit laborum adipisicing laboris labore elit veniam exercitation reprehenderit ex. Enim id quis mollit esse consequat occaecat elit aute cillum. Laboris exercitation ad exercitation ad minim enim cupidatat id."
  },
  {
    id: uniqid(),
    url: 'https://graphql.org',
    title: 'The official GraphQL website.',
    description: "Aliquip nulla aliqua aliqua irure nulla amet nulla irure esse. Laboris non ut eu amet ea qui mollit. Sint consequat minim eu eu culpa consectetur quis duis qui fugiat nulla Lorem amet aute. Cillum sint cillum in occaecat sint duis esse. Culpa culpa reprehenderit sint quis elit. Incididunt ad esse qui fugiat cupidatat ex commodo dolor nisi eiusmod."
  },
  {
    id: uniqid(),
    url: 'https://www.howtographql.com',
    title: 'Awesome GraphQL tutorial.',
    description: "In dolor quis ad officia reprehenderit quis aliquip velit proident eu occaecat cillum dolore amet. Dolore ut ad sint nulla. Officia occaecat pariatur reprehenderit in labore nulla. Qui elit ullamco nisi consequat non consectetur dolor. Anim cillum irure deserunt pariatur fugiat nisi aliqua qui. Velit nisi nulla cillum sint veniam magna elit. In ullamco aliquip anim cupidatat quis elit laboris pariatur consequat cillum enim sunt."
  },
  {
    id: uniqid(),
    url: 'https://github.com/graphcool/graphql-yoga',
    title: 'Fully-featured GraphQL server for JavaScript',
    description: "Esse et mollit laborum adipisicing laboris labore elit veniam exercitation reprehenderit ex. Enim id quis mollit esse consequat occaecat elit aute cillum. Laboris exercitation ad exercitation ad minim enim cupidatat id."
  },
  {
    id: uniqid(),
    url: 'https://graphql.org',
    title: 'The official GraphQL website.',
    description: "Aliquip nulla aliqua aliqua irure nulla amet nulla irure esse. Laboris non ut eu amet ea qui mollit. Sint consequat minim eu eu culpa consectetur quis duis qui fugiat nulla Lorem amet aute. Cillum sint cillum in occaecat sint duis esse. Culpa culpa reprehenderit sint quis elit. Incididunt ad esse qui fugiat cupidatat ex commodo dolor nisi eiusmod."
  },
  {
    id: uniqid(),
    url: 'https://www.howtographql.com',
    title: 'Awesome GraphQL tutorial.',
    description: "In dolor quis ad officia reprehenderit quis aliquip velit proident eu occaecat cillum dolore amet. Dolore ut ad sint nulla. Officia occaecat pariatur reprehenderit in labore nulla. Qui elit ullamco nisi consequat non consectetur dolor. Anim cillum irure deserunt pariatur fugiat nisi aliqua qui. Velit nisi nulla cillum sint veniam magna elit. In ullamco aliquip anim cupidatat quis elit laboris pariatur consequat cillum enim sunt."
  },
  {
    id: uniqid(),
    url: 'https://github.com/graphcool/graphql-yoga',
    title: 'Fully-featured GraphQL server for JavaScript',
    description: "Esse et mollit laborum adipisicing laboris labore elit veniam exercitation reprehenderit ex. Enim id quis mollit esse consequat occaecat elit aute cillum. Laboris exercitation ad exercitation ad minim enim cupidatat id."
  },
  {
    id: uniqid(),
    url: 'https://graphql.org',
    title: 'The official GraphQL website.',
    description: "Aliquip nulla aliqua aliqua irure nulla amet nulla irure esse. Laboris non ut eu amet ea qui mollit. Sint consequat minim eu eu culpa consectetur quis duis qui fugiat nulla Lorem amet aute. Cillum sint cillum in occaecat sint duis esse. Culpa culpa reprehenderit sint quis elit. Incididunt ad esse qui fugiat cupidatat ex commodo dolor nisi eiusmod."
  },
  {
    id: uniqid(),
    url: 'https://www.howtographql.com',
    title: 'Awesome GraphQL tutorial.',
    description: "In dolor quis ad officia reprehenderit quis aliquip velit proident eu occaecat cillum dolore amet. Dolore ut ad sint nulla. Officia occaecat pariatur reprehenderit in labore nulla. Qui elit ullamco nisi consequat non consectetur dolor. Anim cillum irure deserunt pariatur fugiat nisi aliqua qui. Velit nisi nulla cillum sint veniam magna elit. In ullamco aliquip anim cupidatat quis elit laboris pariatur consequat cillum enim sunt."
  },
  {
    id: uniqid(),
    url: 'https://github.com/graphcool/graphql-yoga',
    title: 'Fully-featured GraphQL server for JavaScript',
    description: "Esse et mollit laborum adipisicing laboris labore elit veniam exercitation reprehenderit ex. Enim id quis mollit esse consequat occaecat elit aute cillum. Laboris exercitation ad exercitation ad minim enim cupidatat id."
  },
  {
    id: uniqid(),
    url: 'https://risan.io',
    title: "Risan's programming blog.",
    description: "Aliqua id magna mollit ullamco reprehenderit nostrud nisi. Aute esse fugiat culpa ea nulla est laboris dolore dolore incididunt eiusmod veniam exercitation. Sit enim deserunt veniam commodo non consectetur nulla. Incididunt reprehenderit magna officia quis eiusmod ullamco veniam exercitation culpa. Consequat dolore sunt ipsum aliqua mollit dolor ullamco. Sit do adipisicing nulla eiusmod."
  }
];

const findPostIdxById = id => {
  let postIdx = null;

  for (let idx = 0; idx < posts.length; idx += 1) {
    if (posts[idx].id === id) {
      postIdx = idx;
      break;
    }
  }

  return postIdx;
};

const resolvers = {
  Query: {
    info: () => 'A simple GraphQL server example with in-memory data.',
    posts: () => [].concat(posts).reverse()
  },

  Mutation: {
    createPost: (root, { url, description, title }) => {
      const post = {
        id: uniqid(),
        url,
        title,
        description
      };

      posts.push(post);

      return post;
    },

    updatePost: (root, { id, url, description, title }) => {
      const postIdx = findPostIdxById(id);

      if (postIdx === null) {
        return null;
      }

      posts[postIdx] = { ...posts[postIdx], url, description, title };

      return posts[postIdx];
    },

    deletePost: (root, { id }) => {
      const postIdx = findPostIdxById(id);

      if (postIdx === null) {
        return null;
      }

      const post = posts[postIdx];

      posts.splice(postIdx, 1);

      return post;
    }
  },

  Post: {
    id: root => root.id,
    url: root => root.url,
    description: root => root.description,
    title: root => root.title
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.start(
  {
    port:
      (process.env.PORT ? parseInt(process.env.PORT, 10) : undefined) || 4000
  },
  ({ port }) => console.log(`🏃🏻‍ Server is running on port ${port}.`)
);
