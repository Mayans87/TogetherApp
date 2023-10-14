import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  const dataHandler = (e) => {
    console.log(e);
  };

  return <NewMeetupForm onAddMeetup={dataHandler} />;
}
