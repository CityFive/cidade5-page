import data from "../src/api";
import Homepage from "../src/screens/Homepage";
import Instagram from "instagram-web-api";

export default function Home(props) {
  return <Homepage {...props} />;
}

export async function getStaticProps(context) {
  // const client = new Instagram({
  //   username: process.env.IG_USERNAME,
  //   password: process.env.IG_PASSWORD,
  // });

  // let posts = data.instagramPosts;

  // try {
  //   await client.login();
  //   const instagram = await client.getPhotosByUsername({
  //     username: process.env.IG_USERNAME,
  //   });

  //   if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
  //     // if we receive timeline data back
  //     //  update the posts to be equal
  //     // to the edges that were returned from the instagram API response
  //     posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"].map(
  //       (post) => {
  //         return post.node.display_resources[0].src;
  //       }
  //     );
  //   }
  // } catch (err) {
  //   console.log(
  //     "Something went wrong while fetching content from Instagram",
  //     err
  //   );
  // }

  return {
    props: {
      instagramPosts: data.instagramPosts,
      pastors: data.churchInfo.pastors,
      social: data.social,
      offerPix: data.churchInfo.offerPix
    },
  };
}
