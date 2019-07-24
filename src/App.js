import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";
import Course from './Container/Course/Course';
import './App.css';

const client=new ApolloClient({
  uri:'http://localhost:4000/graphql/'
});

const App=()=>(
  <ApolloProvider client={client}>
    <div>
      <Course/>
    </div>
  </ApolloProvider>
)

export default App;
