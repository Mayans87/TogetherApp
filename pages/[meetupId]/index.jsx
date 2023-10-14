import MeetupDetails from '../../components/meetups/MeetupDetails'
export default function Details(){


return <MeetupDetails image='https://hips.hearstapps.com/hmg-prod/images/antelope-canyon-natural-rock-formation-royalty-free-image-647214816-1550773415.jpg?crop=1xw:1xh;center,top&resize=980:*' title='dummy title' address='dummy address' description='dummy desc'/>

}

export function getStaticPaths(){
  return{
    fallback:true,
    paths:[
      {
        params:{
          meetupId:'m1',
        }
      },
       {
        params:{
          meetupId:'m2',
        }
      },
       {
        params:{
          meetupId:'m3',
        }
      }
    ]
  }
}



export async function getStaticProps(context){
const meetupId = context.params.meetupId
console.log(meetupId)
    return{
      props:{
        MeetupData:{
          id:meetupId,
          title:'dummy title',
          address:'dummy address',
          image:'https://hips.hearstapps.com/hmg-prod/images/antelope-canyon-natural-rock-formation-royalty-free-image-647214816-1550773415.jpg?crop=1xw:1xh;center,top&resize=980:*',
          description:'dummy desc',
        }
      }
    }
  }