import MeetupList from "../components/meetups/MeetupList";

const dummyMeetUps = [
  {
    id: "m1",
    title: "A First meet up",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308",
    address: "Japan",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam id, aperiam.",
  },
  {
    id: "m2",
    title: "A Second meet up",
    image:
      "https://static-blog.treebo.com/blog/wp-content/uploads/2018/06/Dudhsagar-Falls.jpg",
    address: "India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam id, aperiam.",
  },
  {
    id: "m3",
    title: "A Third meet up",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/colorado-maroon-lake-1544823921.jpg",
    address: "USA",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam id, aperiam.",
  },
];
export default function Homepage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props:{
//       meetups:dummyMeetUps
//     }
//   }
  
// }

export async function getStaticProps(){

  return {
    props:{
      meetups:dummyMeetUps
    }
  }
}
