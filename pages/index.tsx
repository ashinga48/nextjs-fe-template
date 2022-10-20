import React, { useEffect } from "react";
import Layout from "@components/Layout";

// Constants
import { SampleRecord } from "@constants/*";

// UI
// import { Card } from "@raisethefire/gui.card";

// Data
import { GET_POSTS, useLazyQuery } from "@services/graphql";

const Home: React.FC = () => {

  // Variables

  // Query
  const [getPosts, {
    loading,
    error,
    data = {},
    // called,
    // refetch
  }] = useLazyQuery(GET_POSTS, {
    variables: {
    },
    context: { timeout: 4000 }
  });
  const { posts = [ ]} = data;

  // Hooks
  useEffect( () => {
    getPosts();
  }, [])
  console.log(error)

  // Render
  return (
    <Layout>

        {posts.map((eachPost: any) => (
          // <Card>
            <div>{eachPost?.title}</div>
          // </Card>
        ))}
    </Layout>
  );
};
export default Home;
